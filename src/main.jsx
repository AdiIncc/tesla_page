import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore/Explore.jsx";
import About from "./pages/About/About.jsx"
import Contact from "./pages/Contact/Contact.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ),
  },
  {
    path: "/explore",
    element: (
      <Explore/>
    ),
  },
  {
    path: "/about",
    element: (
      <About/>
    ),
  },
  {
    path: "/contact",
    element: (
      <Contact/>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
