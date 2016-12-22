/**
 * Created by luis on 22/12/2016.
 */
import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default function(props) {
    return(
        <GoogleMapLoader
            containerElement={ <div style={{height: '95%', width: '230px'}} /> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }
        />
    );
}