import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import {MapCoordinates} from "../../store/chat.types";
import bem from "bem-css-modules";
import styles from "./MapWidget.module.scss";

const block = bem(styles);

type MapWidgetProps = {
  coordinates: MapCoordinates;
  google: any
}

const MapWidget = ({coordinates, google}: MapWidgetProps) => {
  return (
    <Map
      className={block()}
      google={google}
      zoom={15}
      initialCenter={coordinates}
    >
      <Marker position={coordinates} />
    </Map>
  )
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVUB5GitpeIqJng1MT9iXpjypWMgbB-nw'
})(MapWidget);
