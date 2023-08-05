import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./App";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import Messages from "./components/Messages";

export default function Ping() {
  const { socket, setSocket } = useContext(SocketContext);
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const messages = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        dispatch({ type: "ADD_CHAT", payload: message });
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
      <button
        onClick={() => {
          console.log(socket);
        }}
      >
        Print
      </button>
      <h1>Ping</h1>
      <p>Here we will show the ping</p>
      {socket && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              gap: "2rem",
            }}
          >
            <p>{user.displayName}</p>
            <input
              type="text"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
            <button
              onClick={() => {
                socket.emit("message", {
                  text,
                });
                setText("");
              }}
            >
              Send
            </button>
          </div>
          <Messages messages={messages} />
        </>
      )}
    </div>
  );
}
