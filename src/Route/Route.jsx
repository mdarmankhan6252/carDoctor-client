import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home.jsx/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root/>,
     children:[
      {
         index:true,
         element:<Home/>
      },
      {
         path:'/about',
         element:<About/>
      },
      {
         path:'/services',
         element:<Services/>
      },
      {
         path:'/blog',
         element:<Blog/>
      },
      {
         path:'/contact',
         element:<Contact/>
      },
      {
         path:'/login',
         element:<Login/>
      },
      {
         path:'/register',
         element:<Register/>
      }
     ]
   },
 ]);

export default router