import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Ping from "./Ping";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "@firebase/auth";
import firebaseApp from "./utils/firebaseApp";

export const SocketContext = createContext();

function App() {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(getAuth(firebaseApp), (user) => {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
        console.log(user);
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
    });
  }, []);

  return (
    <div className="App">
      {!user && (
        <button
          onClick={() => {
            signInWithPopup(getAuth(firebaseApp), new GoogleAuthProvider());
          }}
        >
          Login with Google
        </button>
      )}

      {user && (
        <>
          <button
            onClick={() => {
              getAuth(firebaseApp).signOut();
            }}
          >
            Logout
          </button>
          <SocketContext.Provider value={{socket, setSocket}}>
            <Ping />
          </SocketContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
