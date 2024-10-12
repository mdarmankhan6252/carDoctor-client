import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <div className="max-w-7xl px-3 mx-auto">
            <Nav />
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Root;