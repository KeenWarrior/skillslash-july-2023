import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SmsIcon from "@mui/icons-material/Sms";

export default function TopAppBar() {
  const user = useSelector((state) => state.user);
  const selectedChat = useSelector((state) => state.chats.selectedChat);

  return (
    <AppBar
      position="sticky"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Toolbar
        style={{
          padding: "0px 16px",
          display: "flex",
          flexDirection: "row",
          width: "300px",
          backgroundColor: "#ece5dd",
          borderRight: "1px solid #000",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
          }}
        >
          <Avatar src={user.photoURL} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton>
            <SmsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Toolbar
        style={{
          flexGrow: 1,
          backgroundColor: "#ece5dd",
        }}
      >
        {selectedChat && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Avatar src={selectedChat?.picture} />
            <Typography variant="body1" style={{
                fontWeight: "bold",
                color: "#000",
            }}>{selectedChat?.name}</Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
