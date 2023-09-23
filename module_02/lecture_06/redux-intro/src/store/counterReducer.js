export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "INCREMENT5":
      return state + 5;
    case "INCREMENT_CUSTOM":
      return state + action.payload;
    default:
      return state;
  }
}
