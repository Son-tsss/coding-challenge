import React from 'react';

import bem from "bem-css-modules";
import cn from 'classnames';
import styles from "./UserMessage.module.scss";

const block = bem(styles);

type UserMessageProps = {
  message: string;
}

const UserMessage = ({message}: UserMessageProps) => {
  return (
    <div className={block()}>
      <div className={block("author")}>You</div>
      <div className={block("message")}>{message}</div>
    </div>
  )
};

export default UserMessage;