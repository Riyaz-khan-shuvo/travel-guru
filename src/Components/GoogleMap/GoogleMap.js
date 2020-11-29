import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        zoom: 13,
    };

    render() {
        const { lat, lng } = this.props.destinationData;

        return (
            <div style={{ height: "80vh", width: "80%" }} className="m-auto">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCJXX9Qm89CvQGljovN1q9kI7Xe8c7u-vg",
                    }}
                    defaultCenter={{ lat, lng }}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
