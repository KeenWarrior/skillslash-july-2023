export default function chatsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHAT":
      return [...state, action.payload];
    default:
      return state;
  }
}
