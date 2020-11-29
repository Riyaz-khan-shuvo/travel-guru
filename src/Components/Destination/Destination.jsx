import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/data.js'

const Destination = () => {
    const {destinationName } = useParams();
    const destinationData = fakeData.find(
        (destination) => destination.name === destinationName
    );
    const [destination , setDestination ] = useState(destinationData);

    const {name , detailInfo} = destination;



    return (
        <div>
            <h3> {name} </h3>
        </div>
    );
};

export default Destination;