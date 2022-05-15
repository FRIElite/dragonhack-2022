import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Flex, Heading } from '@chakra-ui/layout';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { useToast } from '@chakra-ui/react';
import React from 'react';
import { MapContainer } from '../components/MapContainer';
import { Bike } from '../interfaces/bike.interface';
import { startRide } from '../services/ride.service';
import { useAppStore } from '../state/state';

export const MapView: React.FC<{ bikes: Bike[] }> = ({ bikes }) => {
  const [bikeModal, setBikeModal] = React.useState<Bike | null>(null);
  return (
    <>
      <MapContainer markers={bikes} onMarkerClick={(bike: Bike) => setBikeModal(bike)}></MapContainer>
      <BikeModal bike={bikeModal} onClose={() => setBikeModal(null)}>
        <BikeBody bike={bikeModal} />
      </BikeModal>
    </>
  );
};

export function BikeBody({ bike }: { bike: Bike | null }) {
  const toast = useToast()
  const user = useAppStore(state => state.user)

  if (!bike) return <></>;
  const bikePhotos = [
    'https://media.istockphoto.com/photos/yellow-black-racing-sport-road-bike-bicycle-racer-isolated-picture-id1070233662?k=20&m=1070233662&s=612x612&w=0&h=s4dHq7IR98vIwVwRWYCiMNot8UpD0ndBXN1W2mjSNeI=',
    'https://media.istockphoto.com/photos/black-electric-bike-isolated-with-clipping-path-picture-id1038339194?k=20&m=1038339194&s=612x612&w=0&h=iXn7ZAGpgMrvsSznjbyyrLiDsqShxX8q9M_fPnFg2T0=',
    'https://cdn.stocksnap.io/img-thumbs/280h/bike-bicycle_1E5I5YBCEU.jpg',
  ];
  const src = bikePhotos[Math.floor(Math.random() * bikePhotos.length)];

  async function handleClick(){
    let counter = 1000

    const formatTime = (counter: number) => `${Math.floor(counter / 60)}:${(counter % 60).toString().padStart(2, '0')}`

    const btn = document.getElementById('reserveButton' + bike?.id)
    if(!btn) return;
    btn.innerText = formatTime(counter)
    btn.setAttribute('disabled', 'true')

    setInterval(() => {
      btn.innerText = formatTime(counter)
      counter -= 1
    }, 1000)

    try {
      const ndef = new NDEFReader();
      await ndef.scan();
  
      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });
  
      ndef.addEventListener("reading", ({ message, serialNumber }: any) => {
        console.log(`> Serial Number: ${serialNumber}`);
        
        toast({
          description: `Unlocked bike ${serialNumber}`,
          duration: 5000,
        })

        startRide({
          bikeId: bike?.id || 1,
          userId: user?.id || 1
        }).then(res => {
          console.log(res)

          toast({
            description: 'Ride started!',
            duration: 5000,
            status: 'success'
          })
        })

        console.log(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      console.log("Argh! " + error);
    }
  }

  return (
    <Flex width="100%" height="auto" direction="column" gap={6}>
      <Image src={src} width="100%"></Image>
      <Flex direction="column" fontWeight="bold">
        <Flex width="100%" justify="space-between" alignItems="baseline">
          <Heading>{['Good mountian bike', 'Road bike', 'City bike'][Math.floor(Math.random() * 3)]}</Heading>
          <span>{bike.rate.toPrecision(2)}€ / 30min</span>
        </Flex>
        <br></br>
        <Flex width='100%' justify='space-between'>
          <span>Rating: {bike.rating.toPrecision(2)} / 5</span>
          <Button id={'reserveButton' + bike.id} colorScheme="blue" onClick={handleClick}>
            Reserve
          </Button> 
        </Flex>
      </Flex>
    </Flex>
  );
}

function BikeModal({ bike, onClose, children }: { bike: Bike | null; onClose: () => void; children?: any }) {
  if (!bike) return <></>;
  return (
    <>
      <Modal isOpen={!!bike} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bike #{bike.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
