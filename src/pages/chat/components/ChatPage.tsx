import React, {useCallback, useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client';
import bem from "bem-css-modules";
import {sendMessage} from "../store/chatActions";
import styles from "./ChatPage.module.scss";
import Chat from "./Chat";
import useBindActionCreators from "../../../hooks/useBindActionCreators";
const block = bem(styles);

const ChatPage = () => {
  const [socket, setSocket] = useState(null);
  const [response, setResponse] = useState("");
  const actions = useBindActionCreators({sendMessage});
  useEffect(() => {
    if(!socket) {
      const socketIo = socketIOClient('https://demo-chat-server.on.ag/');
      setSocket(socketIo);

      socketIo.on("message", data => setResponse(data.message));

      return () => socketIo.disconnect();
    }
  }, []);

  const handleMessageSend = useCallback((event) => {
    if(socket)
      socket.emit('message', {
        author: "Mari",
        message: "Hey there"
      });
    else setResponse('no socket yet')
  }, [socket]);

  return (
    <div className={block()}>
      <div className={block('header')}>
        <span>
          Hi, we are Ottonova.
        </span>
      </div>
      <Chat />
    </div>
  )
}

export default ChatPage