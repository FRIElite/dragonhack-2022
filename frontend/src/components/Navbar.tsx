import { IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, List, ListItem } from '@chakra-ui/layout';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar: React.FC<any> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavbarLink: React.FC<LinkProps> = props => <Link {...props} onClick={onClose}></Link>;

  return (
    <>
      <Flex width="100%" p={2} justify="space-between">
        <IconButton aria-label="Open Manu" icon={<HamburgerIcon />} onClick={onOpen} />
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
                <NavbarLink to="/">Map</NavbarLink>
              </ListItem>
              <ListItem w="100%">
                <NavbarLink to="/">Map</NavbarLink>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
