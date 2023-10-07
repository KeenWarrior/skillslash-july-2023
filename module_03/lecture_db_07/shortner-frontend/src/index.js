import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";
import LoadUser from "./componenets/LoadUser";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadUser />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
