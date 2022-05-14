import * as React from 'react';
import { ChakraProvider, Box, theme, Flex } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MapView } from './views/MapView';
import { SignupView } from './views/LoginView';
import { useAppStore } from './state/state';

export const App = () => {
  const user = useAppStore(state => state.user);
  console.log({ user });

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex direction="column" width="100%" height="100%" border="1px solid red">
          {!user && <SignupView></SignupView>}
          {user && (
            <>
              <Navbar></Navbar>
              <Box flex="1" border="1px solid white">
                <Routes>
                  <Route path="/" element={<MapView />}>
                    <Route path="/test" element={<MapView />} />
                  </Route>
                </Routes>
              </Box>
            </>
          )}
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
};
