import { IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Divider, Flex, Heading, List, ListItem, OrderedList } from '@chakra-ui/layout';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar: React.FC<any> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavbarLink: React.FC<LinkProps> = props => <Link {...props} onClick={onClose}></Link>;

  return (
    <>
      <Flex width="100%" p={2} justify="space-between" style={{
        // opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        position: 'absolute',
        top: 0,
        zIndex: 10
      }}>
        <IconButton aria-label="Open Menu" icon={<HamburgerIcon />} onClick={onOpen} />
        <ColorModeSwitcher></ColorModeSwitcher>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <List spacing={6}>
              <ListItem w="100%">
                <NavbarLink to="/map">Map</NavbarLink>
              </ListItem>
              <ListItem w="100%">
                <NavbarLink to="/bike-list">Bikes</NavbarLink>
              </ListItem>
              <ListItem w="100%">
                <NavbarLink to="/profile">Profile</NavbarLink>
              </ListItem>
            </List>
            <Divider marginY={6} />
            <Heading fontSize='3xl' marginBottom={4}>Leaderboard</Heading>
            <OrderedList spacing={2}>
              <ListItem fontWeight='bold'>Andraž Mesarič-Sirec (5.0)</ListItem>
              <ListItem>Leon Modic (4.5)</ListItem>
              <ListItem>Dejan Mandič (4.2)</ListItem>
              <ListItem>Vasja Lev Kirn (2.1)</ListItem>
            </OrderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
