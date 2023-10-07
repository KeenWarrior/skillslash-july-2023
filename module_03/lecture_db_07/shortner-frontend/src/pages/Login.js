import { GoogleAuthProvider, getAuth, signInWithRedirect } from "@firebase/auth";
import { app } from "../utils/firebase";

export default function LoginPage() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(getAuth(app), provider).catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
