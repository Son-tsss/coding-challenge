import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {MapCoordinates, SocketCommandEvent, SocketCommandTypes} from "./chat.types";

export const sendMessage = createAsyncThunk<string, string>("sendMessage", (payload) => payload);
export const receiveMessage = createAsyncThunk<string, string>("receiveMessage", (payload) => payload);
export const receiveError = createAsyncThunk<string, string>("receiveError", payload => payload);
export const receiveCommand = createAsyncThunk<void, SocketCommandEvent>("receiveCommand",
  (payload, {dispatch}) => {
  switch(payload.command.type) {
    case SocketCommandTypes.map:
      dispatch(showMap(payload.command.data));
      break;
    case SocketCommandTypes.date:
      dispatch(showDate(payload.command.data));
      break;
    case SocketCommandTypes.rate:
      dispatch(showRate(payload.command.data));
      break;
    case SocketCommandTypes.complete:
      dispatch(showComplete(payload.command.data));
      break;
  }
});

export const showMap = createAsyncThunk<MapCoordinates, MapCoordinates>("showMap", payload => payload);
export const showDate = createAsyncThunk<string, string>('showDate', payload => payload);
export const showRate = createAsyncThunk<[number, number], [number, number]>('showRate', payload => payload);
export const showComplete = createAsyncThunk<[string, string], [string, string]>('showComplete', payload=>payload);