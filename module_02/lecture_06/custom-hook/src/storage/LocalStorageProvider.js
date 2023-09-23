import { useEffect, useState } from "react";
import React from "react";

const LocalContext = React.createContext();

export const LocalStorageProvider = ({ children }) => {
  let initial = localStorage.getItem("counter");
  const [counter, setCounter] = useState(initial ? parseInt(initial) : 0);

  const updateCounter = (value) => {
    localStorage.setItem("counter", "" + value);
    setCounter(value);
  };

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      if (e.key === "counter") {
        setCounter(parseInt(e.newValue));
      }
    });
  }, []);

  return (
    <LocalContext.Provider value={{ counter, updateCounter }}>
      {children}
    </LocalContext.Provider>
  );
};

export { LocalContext };
