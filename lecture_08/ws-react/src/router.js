import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AuthGaurd from "./gaurds/AuthGaurd";
import LoginGaurd from "./gaurds/LoginGaurd";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LoginGaurd>
        <LoginPage />
      </LoginGaurd>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGaurd>
        <HomePage />
      </AuthGaurd>
    ),
  },
]);

export default router;
