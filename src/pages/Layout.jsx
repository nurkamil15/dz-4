import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <footer>See you</footer>
        </div>
    );
};

export default Layout;