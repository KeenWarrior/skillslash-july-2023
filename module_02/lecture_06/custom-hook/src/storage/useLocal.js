import React from "react";
import { LocalContext } from "./LocalStorageProvider";

export default function useLocal() {
  const { counter, updateCounter } = React.useContext(LocalContext);
  return { counter, setCounter: updateCounter };
}
