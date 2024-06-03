import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login";
import Chat from "./routes/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
