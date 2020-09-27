import loginReducer from "../pages/login/store/loginReducer";
import chatReducer from '../pages/chat/store/chatReducer';

const rootReducer = {
  login: loginReducer,
  chat: chatReducer
};

export default rootReducer;