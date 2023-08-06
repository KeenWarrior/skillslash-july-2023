import { combineReducers } from "redux";
import chats from "./chatsReducer";
import user from "./userReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({ chats, user, users });

export default rootReducer;
