export default function chatsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHAT":
      return [...state, action.payload];
    case "SET_CHATS":
      return action.payload;
    default:
      return state;
  }
}
