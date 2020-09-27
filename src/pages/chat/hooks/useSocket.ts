import React, {useCallback, useEffect} from 'react'
import useBindActionCreators from "../../../hooks/useBindActionCreators";
import {receiveError, receiveMessage, sendMessage, receiveCommand} from "../store/chatActions";
import socketIOClient from 'socket.io-client';
import useAppStateSelector from "../../../hooks/useAppStateSelector";

let socket = null;

const useSocket = () => {
  const {user} = useAppStateSelector(({login}) => login);
  const actions = useBindActionCreators({sendMessage, receiveMessage, receiveError, receiveCommand});

  useEffect(() => {
    if (!socket) {
      socket = socketIOClient('https://demo-chat-server.on.ag/');

      socket.on("message", (data) => {
        actions.receiveMessage(data.message);
      });

      socket.on("command", (data) => {
        actions.receiveCommand(data);
      });

      return () => socket.disconnect();
    }
  }, []);

  const handleMessageSend = useCallback((message) => {
    if (socket) {
      socket.emit('message', {
        author: user?.userName || "Mari",
        message
      });

      actions.sendMessage(message)
    }
    else actions.receiveError('something went wrong')
  }, [socket]);

  const handleCommandSend = useCallback(() => {
    if(socket) {
      socket.emit('command');
    }
    else actions.receiveError('something went wrong')
  }, [socket]);

  return {
    sendMessage: handleMessageSend,
    sendCommand: handleCommandSend,
  }
};

export default useSocket;