export enum ChatMessageAuthor {
  user = 'user',
  bot = 'bot'
}

export type MapCoordinates = {
  lat: number;
  lng: number;
}

export enum AttachmentTypes {
  map = "map"
}

export type MapAttachment = {
  type: AttachmentTypes.map;
  data: MapCoordinates;
}

export type Attachments = MapAttachment;

export type ChatMessage = {
  author: ChatMessageAuthor;
  message: string;
  attachment?: MapAttachment;
}

export type SocketCommandEvent = {
  author: string;
  command: SocketCommand;
}

export enum SocketCommandTypes {
  map = 'map',
  date = 'date',
  rate = 'rate',
  complete = 'complete'
}

export type SocketMapCommand = {
  type: SocketCommandTypes.map;
  data: MapCoordinates;
}

export type SocketRateCommand = {
  type: SocketCommandTypes.rate;
  data: [number,number];
}

export type SocketDateCommand = {
  type: SocketCommandTypes.date;
  data: string;
}

export type SocketCompleteCommand = {
  type: SocketCommandTypes.complete;
  data: [string, string];
}

export type SocketCommand = SocketMapCommand | SocketRateCommand | SocketDateCommand | SocketCompleteCommand;

export enum WidgetTypes {
  date = 'date',
  rate = 'rate',
  complete = 'complete'
}

export type WidgetData = {
  type: WidgetTypes;
  data: any;
}
