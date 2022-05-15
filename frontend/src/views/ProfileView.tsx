import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, AvatarBadge, Box, Heading } from "@chakra-ui/react";
import { faBicycle, faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Bike } from "../interfaces/bike.interface";
import { getBikes } from "../services/bikes.service";

export function ProfileView() {
    const [bikes, setBikes] = useState<Bike[]>([])

    useEffect(() => {
        getBikes().then(bikes => setBikes(bikes.slice(0, 5)))
    }, [])

    return <Box sx={{
        width: '100%',
        marginTop: '60px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Heading marginBottom={'10px'}>Leon Modic</Heading>
            <Avatar 
                name='Leon Modic' 
                src='https://avatars.githubusercontent.com/u/47784695?v=4' 
                size={'2xl'}
            >
                <AvatarBadge boxSize='0.9em' bg='green.500' />
            </Avatar>
        </Box>

        <Heading marginTop={'10'}>Rating: 4.5</Heading>
        <Heading marginTop={'10'} marginBottom={'10'}>Your bikes:</Heading>

        <Accordion width={'100%'}>
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
    </Box>
}