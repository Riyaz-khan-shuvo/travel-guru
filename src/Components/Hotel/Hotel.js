import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/data";
import GoogleMap from "../GoogleMap/GoogleMap";
import Header from "../Header/Header";
import HotelDetails from "../HotelDetails/HotelDetails";

const Hotel = () => {
    const hotelData = fakeData.filter(
        (hotelInfo) => hotelInfo.category === "hotelInfo"
    );

    const { destinationName } = useParams();

    const destinationData = fakeData.find(
        (destinationInfo) => destinationInfo.name === destinationName
    );
    return (
        <div>
            <Header></Header>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h4>Stay in {destinationName}</h4>
                            {hotelData.map((hotelDetail) => (
                                <HotelDetails
                                    key={hotelDetail.id}
                                    hotelDetail={hotelDetail}
                                ></HotelDetails>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12 m-auto">
                        <GoogleMap destinationData={destinationData}></GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
