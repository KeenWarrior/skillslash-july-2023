import { USER_AUTHENTICATED, USER_AUTH_LOADING, USER_UNAUTHENTICATED } from "../consts/auth";

const initialState = {
  authState : USER_AUTH_LOADING,
  user : null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("SET_USER", action.payload);
      return {
        authState : USER_AUTHENTICATED,
        user : action.payload,
      };
    case "REMOVE_USER":
      return {
        authState : USER_UNAUTHENTICATED,
        user : null,
      };
    default:
      return state;
  }
};

export default userReducer;
