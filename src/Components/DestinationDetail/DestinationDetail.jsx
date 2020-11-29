import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data';
import { useState } from 'react';
import Itinerary from '../Itinerary/Itinerary';
import './DestinationDetail.css'

const DestinationDetail = () => {

    const { destinationName } = useParams();
    const destinationData = fakeData.find(
        (destination) => destination.name === destinationName
    );
    const [destination, setDestination] = useState(destinationData);
    const { name, detailInfo } = destination;

    return (
        <div className="banner-area">
            <div className="banner-overlay pb-5">
                <Header></Header>
                <div className="container ">
                    <div className="row   align-items-center details-container ">
                        <div className="col-md-5 destination-detail">
                            <h1>{name.toUpperCase()}</h1>
                            <p style={{textAlign: "justify"}}>{detailInfo}</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 col-sm-12 col-12 mt-3 itinerary">
                            <Itinerary name={name}></Itinerary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;