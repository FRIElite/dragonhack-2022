import { CloseIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Input, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react';
import { faBicycle, faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bike } from '../interfaces/bike.interface';
import { BikeBody } from './MapView';

export function BikeListView({bikes}: {bikes: Bike[]}){
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Input 
                marginTop={'80px'} 
                marginBottom={'20px'} 
                placeholder='Search' 
                size='md'
                width={'90%'}
            />
            <Box marginBottom={'30px'}>
                <Tag size='lg' variant='subtle' colorScheme='blue' marginRight={'20px'}>
                    <TagLabel>In radius: 2km</TagLabel>
                    <TagRightIcon boxSize='12px' as={CloseIcon}/>
                </Tag>
                <Tag size='lg' variant='subtle' colorScheme='blue'>
                    <TagLabel>User rating more than: 3.5</TagLabel>
                    <TagRightIcon boxSize='12px' as={CloseIcon}/>
                </Tag>
            </Box>
            <Accordion width={'100%'}>
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
        </Box>
    )
}
