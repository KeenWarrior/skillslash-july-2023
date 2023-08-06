import { useSelector } from "react-redux";
import Redirect from "../components/Redirect";
export default function LoginGaurd({ children }) {
  const user = useSelector((state) => state.user);

  console.log("LoginGaurd", user);

  if (!user) {
    return children;
  } else {
    return <Redirect to="/" />;
  }
}
