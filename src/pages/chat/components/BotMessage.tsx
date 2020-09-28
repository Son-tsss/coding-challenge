import React from 'react';

import bem from "bem-css-modules";

import styles from "./BotMessage.module.scss";
import {Attachments, AttachmentTypes} from "../store/chat.types";
import MapAttachment from "./attachments/MapAttachment";

const block = bem(styles);

type BotMessageProps = {
  message: string;
  attachment?: Attachments;
}

const BotMessage = ({message, attachment}: BotMessageProps) => {
  return (
    <div className={block()}>
      <div className={block("author")}>Ottonova bot</div>
      <div className={block("message")}>{message}</div>
      {attachment && (
        <div className={block("attachment")}>
          {attachment.type === AttachmentTypes.map && <MapAttachment coordinates={attachment.data}/>}
        </div>
      )}
    </div>
  )
};

export default BotMessage;
