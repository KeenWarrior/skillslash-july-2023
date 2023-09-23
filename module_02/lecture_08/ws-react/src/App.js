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
import { RouterProvider } from "react-router-dom";
import router from "./router";

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

  return <RouterProvider router={router} />;
}

export default App;
