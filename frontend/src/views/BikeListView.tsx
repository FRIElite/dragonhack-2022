import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { faBicycle, faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bike } from '../interfaces/bike.interface';
import { BikeBody } from './MapView';

export function BikeListView({ bikes }: { bikes: Bike[] }) {
  return (
    <>
      <div style={{ height: '56px' }}></div>
      <Accordion>
        {bikes.map(bike => {
          return (
            <AccordionItem key={bike.id}>
              <AccordionButton>
                <Box flex="1" textAlign="left" height="60px">
                  {Math.random() > 0.5 ? <FontAwesomeIcon size="3x" icon={faPersonBiking} /> : <FontAwesomeIcon size="3x" icon={faBicycle} />}
                </Box>
                <h2
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {['Good mountian bike', 'Road bike', 'City bike'][Math.floor(Math.random() * 3)]}
                </h2>
                <p>&nbsp;&nbsp;</p>
                <p>{bike.rate.toPrecision(2)}€ / 30min</p>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <BikeBody bike={bike}></BikeBody>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
