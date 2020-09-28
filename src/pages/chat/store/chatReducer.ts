import {createReducer} from "@reduxjs/toolkit";
import {receiveError, receiveMessage, sendMessage, showComplete, showDate, showMap, showRate} from "./chatActions";
import {AttachmentTypes, ChatMessage, ChatMessageAuthor, WidgetData, WidgetTypes} from "./chat.types";

const greetingMessage = {
  author: ChatMessageAuthor.bot,
  message: "Hi, I'm Ottonova chatbot. Please ask me something. Or use command button for quick interaction",
};

export type ChatState = {
  messages: ChatMessage[];
  currentWidget: WidgetData;
  error: string;
}

const initialState: ChatState = {
  messages: [greetingMessage],
  currentWidget: null,
  error: null,
};

const chatReducer = createReducer<ChatState>(
  initialState,
  (builder) => {
    builder.addCase(sendMessage, (state, {payload}) => {
      state.messages.push({
        author: ChatMessageAuthor.user,
        message: payload,

      });

      state.error = null;
      state.currentWidget = null;
    });

    builder.addCase(receiveMessage, (state, {payload}) => {
      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: payload,
      });

      state.error = null;
      state.currentWidget = null;
    });

    builder.addCase(receiveError, (state, {payload}) => {
      state.error = payload;
      state.currentWidget = null;
    });

    builder.addCase(showMap, (state, {payload}) => {
      state.error = null;

      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: "See you there",
        attachment: {
          type: AttachmentTypes.map,
          data: payload
        }
      });

      state.currentWidget = null;
    });

    builder.addCase(showDate, (state, {payload}) => {
      state.error = null;
      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: "When do you want to meet?"
      });

      state.currentWidget = {
        type: WidgetTypes.date,
        data: payload
      }
    });

    builder.addCase(showRate, (state, {payload}) => {
      state.error = null;
      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: "Please rate your experience"
      });

      state.currentWidget = {
        type: WidgetTypes.rate,
        data: payload
      }
    });

    builder.addCase(showComplete, (state, {payload}) => {
      state.error = null;
      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: "Do you want to quit our chat?"
      });

      state.currentWidget = {
        type: WidgetTypes.complete,
        data: payload
      }
    });
  });

export default chatReducer;
