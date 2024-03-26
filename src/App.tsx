import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayerContextProvider from "./context/PlayerContext";
import Game from "./page/Game";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

export default function Router() {
  return (
    <PlayerContextProvider>
      <RouterProvider router={router} />
    </PlayerContextProvider>
  );
}
