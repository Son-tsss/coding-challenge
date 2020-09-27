import React from 'react';
import bem from "bem-css-modules";
import cn from 'classnames';
import styles from "./ChatMessages.module.scss";
import useAppStateSelector from "../../../hooks/useAppStateSelector";
import {ChatMessageAuthor} from "../store/chat.types";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import useScrollToBottom from "./ScrollToBottom";
import Widget from "./widgets/Widget";

const block = bem(styles);
type ChatMessagesProps = {
  className?: string
}

const ChatMessages = ({className}: ChatMessagesProps) => {
  const {messages, error} = useAppStateSelector(({chat}) => chat);
  const scrollToBottomComponent = useScrollToBottom([messages]);
  return (
    <div className={cn(block(), className)}>
      <div className={block("messages-container")}>
      {messages.map(({author, message, map}, i) => {
        return (
          <div key={i} className={cn(block(
            "message",
            {
              bot: author === ChatMessageAuthor.bot,
              user: author === ChatMessageAuthor.user
            }))}>
            {author === ChatMessageAuthor.user && <UserMessage message={message}/>}
            {author === ChatMessageAuthor.bot && (<BotMessage message={message} map={map}/>)}
          </div>
        )
      })}
      <div className={"widget"}>
        <Widget />
      </div>
      {error && (
        <div className={"error"}>
          {error}
        </div>
      )}
        {scrollToBottomComponent}
      </div>
    </div>
  )
};

export default ChatMessages