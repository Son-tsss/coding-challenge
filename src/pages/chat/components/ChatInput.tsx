import React, {useState} from 'react';
import useSocket from "../hooks/useSocket";
import TextField from "../../../components/TextField";
import cn from 'classnames'
import IconButton from "../../../components/IconButton";
import {ActionIcon, SendIcon} from "../../../components/icons/Icons";
import bem from "bem-css-modules";
import styles from "./ChatInput.module.scss";

const block = bem(styles);

type ChatInputProps = {
  className: string;
}

const ChatInput = ({className}: ChatInputProps) => {
  const {sendMessage, sendCommand} = useSocket();
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    sendMessage(message);
    setMessage("")
  };

  return (
      <div className={cn(block(""), className)}>
        <TextField
          className={block("text-field")}
          value={message}
          placeholder={""}
          onChange={setMessage}
          onEnterPress={handleSendClick}
          autoFocus
        />
        <IconButton
          disabled = {message === ""}
          className={block("send-button")}
          onClick={handleSendClick}
          icon={<SendIcon />}
        />
        <IconButton onClick={sendCommand} icon={<ActionIcon />} />
      </div>

  )
};

export default ChatInput;