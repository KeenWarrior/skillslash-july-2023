import logo from "./logo.svg";
import "./App.css";
import axios from "./utils/axios";

import firebaseApp from "./utils/firebaseApp";
import Login from "./Login";
import { useEffect } from "react";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(getAuth(firebaseApp), (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          console.log(token);
          axios.defaults.headers["Authorization"] = "Bearer " + token;
          dispatch({ type: "SET_TOKEN", payload: token });
        });
      }

      dispatch({ type: "SET_USER", payload: user });
    });
  }, [firebaseApp]);

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Logged in as {user.displayName}</h1>
          <button
            onClick={() => {
              getAuth(firebaseApp).signOut();
            }}
          >
            Log out
          </button>

          <button
            onClick={() => {
              axios
                .get("http://localhost:5000/")
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Ping
          </button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
