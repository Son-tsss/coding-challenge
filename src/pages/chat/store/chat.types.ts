export enum ChatMessageAuthor {
  user ='user',
  bot='bot'
}

export type MapCoordinates = {
  lat: number,
  lng: number,
}

export type ChatMessage = {
  author: ChatMessageAuthor;
  message: string;
  map?: MapCoordinates;
}

export type SocketMessage = {
  message: string
}

export type SocketCommandEvent = {
  author: string,
  command: SocketCommand,
}

export enum SocketCommandTypes {
  map = 'map',
  date = 'date',
  rate= 'rate',
  complete = 'complete'
}

export type SocketCommand = {
  type: SocketCommandTypes,
  data: any
}

export enum WidgetTypes {
  date = 'date',
  rate = 'rate',
  complete = 'complete'
}

export type WidgetData = {
  type: WidgetTypes,
  data: any
}