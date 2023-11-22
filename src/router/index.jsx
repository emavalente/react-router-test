import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../pages/LayoutPublic";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Frontend from "../pages/Frontend";
import Backend from "../pages/Backend";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            index: true,
            element: <Frontend />,
          },
          {
            path: "frontend",
            element: <Frontend />,
          },
          {
            path: "backend",
            element: <Backend />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
