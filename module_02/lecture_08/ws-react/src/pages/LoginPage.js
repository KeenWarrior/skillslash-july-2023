import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";

import firebaseApp from "../utils/firebaseApp";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

export default function LoginPage() {
  const user = useSelector((state) => state.user);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Login Page</h1>

      <Button variant="contained"
        onClick={() => {
          signInWithPopup(getAuth(firebaseApp), new GoogleAuthProvider());
        }}
      >
        Login with Google
      </Button>

    </div>
  );
}
