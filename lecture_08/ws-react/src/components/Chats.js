import { useContext, useState } from "react";
import { SocketContext } from "../pages/HomePage";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default function Chats() {
  const { socket } = useContext(SocketContext);
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const messages = useSelector((state) => {
    return state.chats.messages;
  });

  const [text, setText] = useState("");

  const sendMessage = () => {
    socket.emit("message", {
      text,
      to: selectedChat.uid,
    });
  };

  return (
    <div>
      {messages
        .filter((message) => {
          if (
            message.from == selectedChat.uid ||
            message.to == selectedChat.uid
          )
            return true;
          else return false;
        })
        .map((message) => {
          return (
            <ListItem>
              <ListItemText
                primary={message.text}
                style={{
                  backgroundColor:
                    message.from == selectedChat.uid ? "blue" : "green",
                }}
              />
            </ListItem>
          );
        })}

      <TextField
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></TextField>
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
}
