import { getAuth, signOut } from "@firebase/auth";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { app } from "../utils/firebase";
import BottomNav from "../componenets/BottomNav";

export default function BaseLayout({ children }) {
  const handleLogout = () => {
    signOut(getAuth(app));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
            }}
          >
            URL Shortener
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {children}
      </div>

      <BottomNav />
    </div>
  );
}
