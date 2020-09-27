import React from 'react';

import bem from "bem-css-modules";
import cn from 'classnames';
import styles from "./BotMessage.module.scss";
import {MapCoordinates} from "../store/chat.types";
import MapWidget from "./widgets/MapWidget";

const block = bem(styles);

type BotMessageProps = {
  message: string;
  map?: MapCoordinates;
}

const BotMessage = ({message, map}: BotMessageProps) => {
  return (
    <div className={block()}>
      <div className={block("author")}>Ottonova bot</div>
      <div className={block("message")}>{message}</div>
      {map && (
        <div className={block("map")} >
          <MapWidget coordinates={map} />
        </div>
      )}
    </div>
  )
};

export default BotMessage;