const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "SET_USERS":
      return action.payload;
    default:
      return state;
  }
}