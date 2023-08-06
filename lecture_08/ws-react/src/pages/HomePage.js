import { getAuth } from "@firebase/auth";
import { useSelector } from "react-redux";
import firebaseApp from "../utils/firebaseApp";
import TopAppBar from "../components/home/TopAppBar";

export default function HomePage() {
  const user = useSelector((state) => state.user);

  return (
    <div>
        <TopAppBar />
    </div>
  );
}
