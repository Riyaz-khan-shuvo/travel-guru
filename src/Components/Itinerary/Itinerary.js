import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Itinerary = (props) => {
    const history = useHistory();
    const { destinationName } = useParams();
    const handleBooking = () => {
        history.push(`/hotel/${destinationName}`);
    };
    return (
        <div>
            <div className="form-group">
                <label>Origin</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue="Dhaka"
                />
            </div>
            <div className="form-group">
                <label>Destination</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={props.name}
                />
            </div>
            <div className="form-row ">
                <div className="form-group col-md-6 col-sm-6">
                    <label>From</label>
                    <input type="date" className="form-control" />
                </div>

                <div className="form-group col-md-6 col-sm-6">
                    <label>To</label>
                    <input type="date" className="form-control" />
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-warning  btn-block"
                onClick={handleBooking}
            >
                Start Booking
            </button>
        </div>
    );
};

export default Itinerary;
