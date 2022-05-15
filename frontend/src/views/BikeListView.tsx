import { faBicycle, faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bike } from "../interfaces/bike.interface";


export function BikeTile({bike}: {bike: Bike}){
    return <div style={{
        width: '100%', 
        height: '100px',
        backgroundColor: 'lightgray',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px'
    }}>
        {
            Math.random() > 0.5 ? 
                <FontAwesomeIcon size='3x' icon={faPersonBiking} /> : 
                <FontAwesomeIcon size='3x' icon={faBicycle} />
        }
        <div style={{
            width: '100%',
            textAlign: 'right',
            paddingRight: '10px'
        }}>
            <h2>Dobro kolo</h2>
            <p>Gre zelo hitro</p>
            <p>2€/hr</p>
        </div>
    </div>
}

export function BikeListView({bikes}: {bikes: Bike[]}){
    return (
        <>
            <div style={{height: '48px'}}></div>
            {
                bikes
                .map(bike => <BikeTile bike={bike}/>)
            }
        </>
    )
}