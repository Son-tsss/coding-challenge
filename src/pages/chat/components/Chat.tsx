import React, {useState} from 'react';
import bem from "bem-css-modules";
import styles from "./Chat.module.scss";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
const block = bem(styles);

const Chat = () => {
  return (
    <div className={block()}>
      <ChatMessages className={block("chat-messages")} />
      <ChatInput className={block("chat-input")} />
    </div>
  )
};

export default Chat;