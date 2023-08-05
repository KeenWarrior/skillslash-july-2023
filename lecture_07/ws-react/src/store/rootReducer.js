import { combineReducers } from "redux";
import chats from "./chatsReducer";

const rootReducer = combineReducers({chats});

export default rootReducer;