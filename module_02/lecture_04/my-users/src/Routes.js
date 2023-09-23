import { createBrowserRouter } from "react-router-dom";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recents",
    element: (
      <div
        className="App"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <div>Recents Page</div>
        </div>
        <SimpleBottomNavigation />
      </div>
    ),
  },
  {
    path: "/favorites",
    element: (
      <div
        className="App"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <div>Favorites Page</div>
        </div>
        <SimpleBottomNavigation />
      </div>
    ),
  },
  {
    path: "/nearby",
    element: (
      <div
        className="App"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <div>Nearby Page</div>
        </div>
        <SimpleBottomNavigation />
      </div>
    ),
  },
]);

export default router;
