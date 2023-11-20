import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import Products from "../components/pages/Products";
import Services from "../components/pages/Services";
import SignUp from "../components/pages/SignUp";


const routesConfig = [
    {
      path: "/",
      element: (
        <>
            <Navbar />
            <Outlet />
        </>
      ),
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/services", element: <Services /> },
        { path: "/sign-up", element: <SignUp /> },
      ],
    },
  ];
  
  export default routesConfig;