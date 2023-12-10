import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home.jsx/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Service from "../pages/service/Service";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/service',
          element: <Service></Service>
        }
      ]
    },
  ]);

  export default router;