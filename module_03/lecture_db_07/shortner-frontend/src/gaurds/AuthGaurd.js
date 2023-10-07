import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { USER_AUTH_LOADING, USER_UNAUTHENTICATED } from "../consts/auth";

export default function AuthGaurd({ children }) {
  const user = useSelector((state) => state.user);

  console.log("AuthGaurd", user);

  if (user.authState === USER_AUTH_LOADING) {
    return <div>Loading...</div>;
  } else if (user.authState === USER_UNAUTHENTICATED) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
