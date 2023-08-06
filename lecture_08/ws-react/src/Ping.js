import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";

export default function Ping() {
  const { socket, setSocket } = useContext(SocketContext);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {

      socket.on("message", (message) => {
        console.log(message);
        dispatch({ type: "ADD_CHAT", payload: message });
      });

      socket.on(user.uid, (message) => {
        console.log(message);
      });
    }
  }, [socket]);

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:5000", {
      auth: {
        token: user.accessToken,
      },
    });
    setSocket(newSocket);
  }, []);

  return (
    <div>
      
    </div>
  );
}
