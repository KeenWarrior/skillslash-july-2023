import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Ping from "./Ping";
import { useDispatch } from "react-redux";

export const SocketContext = createContext();

function App() {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        dispatch({ type: "ADD_CHAT", payload: message });
      });
    }
  }, [socket]);

  useEffect(() => {
    if (!socket || (socket && socket.disconnected)) {
      const newSocket = socketIOClient("http://localhost:5000");
      setSocket(newSocket);
    }
  }, []);

  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        {socket ? <Ping /> : <h1>Not connected</h1>}
      </SocketContext.Provider>
    </div>
  );
}

export default App;
