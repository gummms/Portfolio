import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App.jsx";

//páginas
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
