import { Box, ChakraProvider, Flex, theme } from '@chakra-ui/react';
import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Bike } from './interfaces/bike.interface';
import { useAppStore } from './state/state';
import { BikeListView } from './views/BikeListView';
import { MapView } from './views/MapView';

export const App = () => {
  const user = useAppStore(state => state.user);
  const [bikes, setBikes] = React.useState<Bike[]>([])
  console.log({ user });

  React.useEffect(() => {
    setBikes([
      {
        id: 1
      } as Bike,
      {
        id: 2
      } as Bike,
      {
        id: 3
      } as Bike
    ])
    // getBikes().then(bikes => {
    //   setBikes(bikes)
    // })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex direction="column" width="100%" height="100%">
          {/* {!user && <SignupView></SignupView>} */}
          <Navbar></Navbar>
          <Box flex="1" border="1px solid white">
            <Routes>
              <Route path="/" element={
                <Navigate replace to="/map"/>
              }></Route>
              <Route path="map" element={<MapView />} />
              <Route path="bike-list" element={<BikeListView bikes={bikes as Bike[]}/>} />
            </Routes>
          </Box>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};
