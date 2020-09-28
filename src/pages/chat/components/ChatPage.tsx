import React from "react";
import bem from "bem-css-modules";
import styles from "./ChatPage.module.scss";
import Chat from "./Chat";

const block = bem(styles);

const ChatPage = () => {
  return (
    <div className={block()}>
      <div className={block('header')}>
        <span>
          Hi, we are Ottonova.
        </span>
      </div>
      <Chat />
    </div>
  );
};

export default ChatPage;
