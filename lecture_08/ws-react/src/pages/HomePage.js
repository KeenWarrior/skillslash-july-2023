import { getAuth } from "@firebase/auth";
import { useSelector } from "react-redux";
import firebaseApp from "../utils/firebaseApp";
import TopAppBar from "../components/home/TopAppBar";
import Ping from "../Ping";
import { createContext, useState } from "react";
import Users from "../components/Users";
import Chats from "../components/Chats";

export const SocketContext = createContext();

export default function HomePage() {
  const [socket, setSocket] = useState(null);

  const user = useSelector((state) => state.user);
  const selectedChat = useSelector((state) => state.chats.selectedChat);

  return (
    <div>
      <SocketContext.Provider value={{ socket, setSocket }}>
        <TopAppBar />
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
        }}>
            <Users />
            {selectedChat && <Chats />}
        </div>
    
        <Ping />

      </SocketContext.Provider>
    </div>
  );
}
