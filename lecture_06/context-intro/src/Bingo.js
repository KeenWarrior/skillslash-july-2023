import { useContext } from "react";
import { UserContext } from "./App";

export default function Bingo() {
  const { user } = useContext(UserContext);

  return (
    <div className="Bingo">
      <h1>Bingo</h1>
      <p>Current user: {user}</p>
    </div>
  );
}
