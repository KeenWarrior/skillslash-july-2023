import { useContext, useState } from "react";
import { SocketContext } from "./App";
import { useSelector } from "react-redux";

export default function Ping() {
  const socket = useContext(SocketContext);
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const messages = useSelector((state) => state.chats);

  return (
    <div>
      <h1>Ping</h1>
      <p>Here we will show the ping</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          gap: "2rem",
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
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
              username,
              text,
            });
            setText("");
          }}
        >
          Send
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => {
            return (
              <tr key={index}>
                <td>{message.username}</td>
                <td>{message.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
