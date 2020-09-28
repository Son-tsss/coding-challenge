import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {MapCoordinates, SocketCommandEvent, SocketCommandTypes} from "./chat.types";

export const sendMessage = createAction<string>("sendMessage");
export const receiveMessage = createAction<string>("receiveMessage");
export const receiveError = createAction<string>("receiveError");
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

export const showMap = createAction<MapCoordinates>("showMap");
export const showDate = createAction<string>('showDate');
export const showRate = createAction<[number, number]>('showRate');
export const showComplete = createAction<[string, string]>('showComplete');
