import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home.jsx/Home";
import Contact from "../pages/contact/Contact";

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
        }
      ]
    },
  ]);

  export default router;