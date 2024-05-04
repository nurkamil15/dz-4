import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/data'>Данные</Link>
        </div>
    );
};

export default Navbar;