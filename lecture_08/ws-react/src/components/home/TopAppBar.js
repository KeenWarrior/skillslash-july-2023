import { AppBar, Avatar, IconButton, Menu, Toolbar } from "@mui/material";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SmsIcon from '@mui/icons-material/Sms';

export default function TopAppBar() {
  const user = useSelector((state) => state.user);

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
          width: "250px",
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
      ></Toolbar>
    </AppBar>
  );
}
