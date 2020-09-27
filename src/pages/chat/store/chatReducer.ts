import { createSlice } from "@reduxjs/toolkit";
import {receiveError, receiveMessage, sendMessage, showComplete, showDate, showMap, showRate} from "./chatActions";
import {ChatMessage, ChatMessageAuthor, WidgetData, WidgetTypes} from "./chat.types";

const greetingMessage = {
  author: ChatMessageAuthor.bot,
  message: "Hi, I'm Ottonova chatbot. Please ask me something. Or use command button for quick interaction",
};

export type ChatState = {
  messages: ChatMessage[];
  currentWidget: WidgetData;
  error: "";
}

const initialState = {
  messages: [greetingMessage],
  currentWidget: {},
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendMessage.fulfilled, (state, {payload}) => {
      state.messages.push({
        author: ChatMessageAuthor.user,
        message: payload,
      });

      state.error = null;
      state.currentWidget = null;
    });

    builder.addCase(receiveMessage.fulfilled, (state, {payload}) => {
      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: payload
      });

      state.error = null;
      state.currentWidget = null;
    });

    builder.addCase(receiveError.fulfilled, (state, {payload}) => {
      state.error = payload;
      state.currentWidget = null;
    });


    builder.addCase(showMap.fulfilled, (state, {payload}) => {
      state.error = null;
      state.messages.push({
        author: ChatMessageAuthor.bot,
        message: "See you there",
        map: payload
      });
      state.currentWidget = null;
    });

    builder.addCase(showDate.fulfilled, (state, {payload}) => {
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

    builder.addCase(showRate.fulfilled, (state, {payload}) => {
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

    builder.addCase(showComplete.fulfilled, (state, {payload}) => {
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
  }
});

export default chatSlice.reducer;