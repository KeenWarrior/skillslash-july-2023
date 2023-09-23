const initialState = null;

export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;
    default:
      return state;
  }
}