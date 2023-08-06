const initialState = {
  selectedChat: null,
  messages: [],
};

export default function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHAT":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "SET_SELECTED_CHAT":
      return {
        ...state,
        selectedChat: action.payload,
      };
    default:
      return state;
  }
}
