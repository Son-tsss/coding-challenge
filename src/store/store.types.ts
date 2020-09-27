import {LoginState} from "../pages/login/store/loginReducer";
import {ChatState} from "../pages/chat/store/chatReducer";

export type AppState = {
  login: LoginState;
  chat: ChatState;
}