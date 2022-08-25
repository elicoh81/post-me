import React from 'react';
import { useQuery } from '../../common-hooks/UseQuery';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function MapPage() {
    let query = useQuery();
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {query.get('lat') && query.get('long') && <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={+query.get('lat')!}
                    lng={+query.get('long')!}
                    text="My Marker"
                />
            </GoogleMapReact>}
        </div>
    );

}