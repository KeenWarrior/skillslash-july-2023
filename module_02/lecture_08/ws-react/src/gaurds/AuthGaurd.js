import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Redirect from "../components/Redirect";

export default function AuthGaurd({ children }) {
const user = useSelector((state) => state.user);

  console.log("AuthGaurd", user);

  if (user) {
    return children;
  } else {
    return <Redirect to="/login" />;
  }
}
