import { combineReducers } from "redux";
import chats from "./chatsReducer";
import user from "./userReducer";

const rootReducer = combineReducers({ chats, user });

export default rootReducer;
