import { Link } from "react-router-dom";
const NavBar = () => {
    return ( <div>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/checkout">My Cart </Link>

        </nav>
    </div> );
}
 
export default NavBar;