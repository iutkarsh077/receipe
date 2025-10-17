import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Meals from "../components/Meals";
import About from "../components/About";
import Contact from "../components/Contact";
import Blogs from "../components/Blog";
import App from "../App";
import Admin from "../components/Admin";
import SpecificMeal from "../components/SpecificMeal";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/meal/:name",
        element: <SpecificMeal />,
      },
    ],
  },
]);

export default Router;
