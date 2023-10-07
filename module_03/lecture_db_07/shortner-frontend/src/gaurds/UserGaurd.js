import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  USER_AUTHENTICATED,
} from "../consts/auth";

export default function UserGaurd({ children }) {
  const user = useSelector((state) => state.user);

  if (user && user.authState === USER_AUTHENTICATED) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
