import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Bingo from "./Bingo";

const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState("Anuj Garg");

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Bingo />
      </UserContext.Provider>
    </div>
  );
}

export { UserContext };

export default App;
