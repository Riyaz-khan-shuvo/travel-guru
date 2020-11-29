import React from "react";
import ratingLogo from "../../Images/star.png";

const HotelDetails = (props) => {
    const {
        title,
        img,
        bedrooms,
        beds,
        bath,
        cancellation,
        guests,
        info,
        numberOfPersonRated,
        price,
        total,
        rating,
    } = props.hotelDetail;
    return (
        <div className="card mb-3 border-0">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={img} className="img-fluid mt-4" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="d-flex justify-content-between">
                            <small className="text-muted">
                                {guests} guests
                            </small>
                            <small className="text-muted">
                                {bedrooms} bedrooms
                            </small>
                            <small className="text-muted">{beds} beds</small>
                            <small className="text-muted">{bath} baths</small>
                        </p>
                        <p>{info}</p>
                        <p>{cancellation}</p>
                        <p className="d-flex justify-content-between">
                            <span>
                                <img
                                    className="w-25"
                                    src={ratingLogo}
                                    alt="star"
                                />
                                <small>
                                    {rating}({numberOfPersonRated})
                                </small>
                            </span>
                            <small>
                                ${price}/{" "}
                                <span className="text-muted">night</span>
                            </small>
                            <small className="text-muted">${total} total</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
