import { getAuth, signInWithCredential, signInWithPopup } from "@firebase/auth";
import firebaseApp from "./utils/firebaseApp";
import { GoogleAuthProvider, EmailAuthProvider } from "@firebase/auth";
import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            signInWithCredential(
              getAuth(firebaseApp),
              EmailAuthProvider.credential(username, password)
            ).catch((err) => {
              console.log(err);
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
