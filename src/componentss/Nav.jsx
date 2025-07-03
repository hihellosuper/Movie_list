import { Link, Links } from "react-router-dom";
import  "../css/Navbar.css";

function Nav () {
    return <nav className="navbar">
        <div className="nav-company">
            <Link to={"/"}> Movie Hub</Link>
        </div>
        <div className="nav-links">
            <Link to={"/"} className="nav-link">Home</Link>
            <Link to={"/favorites"} className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default Nav;