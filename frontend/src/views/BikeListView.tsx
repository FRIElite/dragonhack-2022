import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { faBicycle, faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bike } from "../interfaces/bike.interface";

export function BikeListView({bikes}: {bikes: Bike[]}){
    return (
        <>
            <div style={{height: '56px'}}></div>
            <Accordion>
                {
                    bikes.map(bike => {
                        return <AccordionItem key={bike.id}>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' height='60px'>
                                {
                                    Math.random() > 0.5 ? 
                                        <FontAwesomeIcon size='3x' icon={faPersonBiking} /> : 
                                        <FontAwesomeIcon size='3x' icon={faBicycle} />
                                }
                                </Box>
                                <h2 style={{
                                    fontWeight: 'bold'
                                }}>{
                                    ['Good mountian bike', 'Road bike', 'City bike'][Math.floor(Math.random() * 3)]    
                                }</h2>
                                <p>&nbsp;&nbsp;</p>
                                <p>{bike.rate.toPrecision(2)}€ / 30min</p>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <p style={{fontWeight: 'bold'}}>Rating: {bike.rating.toPrecision(2)} / 5</p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    })
                }
            </Accordion>
        </>
    )
}