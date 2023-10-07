import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { app } from "../utils/firebase";
import { useDispatch } from "react-redux";

export default function LoadUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(getAuth(app), (user) => {
      console.log("onAuthStateChanged", user);
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      } else {
        dispatch({
          type: "REMOVE_USER",
        });
      }
    });
  }, []);

  return <div></div>;
}
