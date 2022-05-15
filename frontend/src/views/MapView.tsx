import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import React from 'react';
import { MapContainer } from '../components/MapContainer';
import { Bike } from '../interfaces/bike.interface';

export const MapView: React.FC<{ bikes: Bike[] }> = ({ bikes }) => {
  const [bikeModal, setBikeModal] = React.useState<Bike | null>(null);
  return (
    <>
      {/* <Flex fontSize="150px">ELITE TEAM</Flex> */}
      <MapContainer markers={bikes} onMarkerClick={(bike: Bike) => setBikeModal(bike)}></MapContainer>
      <BikeModal bike={bikeModal} onClose={() => setBikeModal(null)}></BikeModal>
    </>
  );
};

function BikeModal({ bike, onClose }: { bike: Bike | null, onClose: () => void}) {
  if (!bike) return <></>;
  return (
    <>
      <Modal isOpen={!!bike} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bike #${bike.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Hahah
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}