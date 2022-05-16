import { Box, Flex, Tab, TabList, Tabs, useColorModeValue } from '@chakra-ui/react';
import { faList, faMap, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Bike } from './interfaces/bike.interface';
import { getBikes } from './services/bikes.service';
import { useAppStore } from './state/state';
import { BikeListView } from './views/BikeListView';
import { SignupView } from './views/LoginView';
import { MapView } from './views/MapView';
import { ProfileView } from './views/ProfileView';
import { ScannerView } from './views/ScannerView';

export const App = () => {
  const user = useAppStore(state => state.user);
  const [bikes, setBikes] = React.useState<Bike[]>([])
  const tabsColor = useColorModeValue('white', 'black')

  React.useEffect(() => {
    getBikes().then((bikes: Bike[] = []) => {
      setBikes(bikes)
    })
  }, [])

  return (
    <BrowserRouter>
      <Flex direction="column" width="100%" height="100%" overflowX={'hidden'}>
        {!user && <SignupView></SignupView>}
        {user && (
          <>
            <Navbar></Navbar>
            <Box flex="1">
              <Routes>
                <Route path="/" element={<Navigate replace to="/map"/>}></Route>
                <Route path="map" element={<MapView bikes={bikes} />} />
                <Route path="bike-list" element={<BikeListView bikes={bikes}/>} />
                <Route path="scanner" element={<ScannerView />} />
                <Route path="profile" element={<ProfileView />} />
              </Routes>
            </Box>
            <Tabs defaultIndex={0} style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: tabsColor
            }}>
              <TabList sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}>
                <Link to="/map">
                  <Tab>
                    <FontAwesomeIcon size='2x' icon={faMap} />
                  </Tab>
                </Link>
                <Link to="/bike-list">
                  <Tab>
                    <FontAwesomeIcon size='2x' icon={faList} />
                  </Tab>
                </Link>
                <Link to="/profile">
                  <Tab>
                    <FontAwesomeIcon size='2x' icon={faUser} />
                  </Tab>
                </Link>
              </TabList>
            </Tabs>
          </>
        )}
      </Flex>
    </BrowserRouter>
  );
};
