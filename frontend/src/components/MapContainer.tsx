import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { isLatLngLiteral } from '@googlemaps/typescript-guards';
import { createCustomEqual } from 'fast-equals';
import * as React from 'react';
import { mapDarkStyles } from '../const';
import { Bike } from '../interfaces/bike.interface';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

export const MapContainer: React.VFC<{ markers: Bike[]; onMarkerClick: (bike: Bike) => void }> = ({ markers, onMarkerClick }) => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(15); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 46.050286,
    lng: 14.466815,
  });
  const { colorMode } = useColorMode();
  const iconUrl = useColorModeValue('./bikeDark.svg', './bikeLight.svg')

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  function getMapStyles() {
    return colorMode === 'dark' ? mapDarkStyles : undefined;
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''} render={render}>
        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          fullscreenControl={false}
          streetViewControl={false}
          zoomControl={false}
          mapTypeControl={false}
          controlSize={0}
          styles={getMapStyles() as any}
          style={{ flexGrow: '1', height: '100%' }}
        >
          {markers.map((latLng, i) => {
            return <Marker key={i} icon={{
              url: latLng.reservedTime ? "./bikeRed.svg" : iconUrl,
            }} position={latLng} onClick={() => onMarkerClick(latLng)} />;
          })}
        </Map>
      </Wrapper>
    </div>
  );
};
interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const Map: React.FC<MapProps> = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach(eventName => google.maps.event.clearListeners(map, eventName));

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  // React.useEffect(() => {
  //   getBikes().then(bikes => console.log(bikes));
  // }, []);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: React.FC<google.maps.MarkerOptions & { onClick: any }> = ({ onClick, ...options }) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      marker.addListener('click', onClick);
    }
  }, [marker, options]);

  return null;
};

const deepCompareEqualsForMaps = createCustomEqual((deepEqual: any) => (a: any, b: any) => {
  if (isLatLngLiteral(a) || a instanceof google.maps.LatLng || isLatLngLiteral(b) || b instanceof google.maps.LatLng) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }

  // TODO extend to other types

  // use fast-equals for other objects
  return deepEqual(a, b);
});

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(callback: React.EffectCallback, dependencies: any[]) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}
