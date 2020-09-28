import React from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";
import {MapCoordinates} from "../../store/chat.types";
import bem from "bem-css-modules";
import styles from "./MapAttachment.module.scss";

const block = bem(styles);

type MapAttachmentProps = {
  coordinates: MapCoordinates;
  google: any
}

const MapAttachment = ({coordinates, google}: MapAttachmentProps) => {
  return (
    <>
      {/* Should be ignored because google-maps-react has no className props declared, but support it
          // @ts-ignore */}
      <Map className={block()} google={google} zoom={15} initialCenter={coordinates}>
        <Marker position={coordinates}/>
      </Map>
    </>
  )
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVUB5GitpeIqJng1MT9iXpjypWMgbB-nw'
})(MapAttachment);
