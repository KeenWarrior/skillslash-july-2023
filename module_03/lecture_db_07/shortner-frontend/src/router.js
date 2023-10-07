import { createBrowserRouter } from "react-router-dom";
import AuthGaurd from "./gaurds/AuthGaurd";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import BaseLayout from "./layouts/BaseLayout";
import UserGaurd from "./gaurds/UserGaurd";
import Links from "./pages/Links";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGaurd>
        <BaseLayout>
          <HomePage />
        </BaseLayout>
      </AuthGaurd>
    ),
  },{
    path: "/links",
    element: (
      <AuthGaurd>
        <BaseLayout>
          <Links />
        </BaseLayout>
      </AuthGaurd>
    ),
  },{
    path: "/settings",
    element: (
      <AuthGaurd>
        <BaseLayout>
          <h1>Settings</h1>
        </BaseLayout>
      </AuthGaurd>
    ),
  },
  {
    path: "/login",
    element: <UserGaurd><LoginPage /></UserGaurd>,
  },
]);

export default router;
