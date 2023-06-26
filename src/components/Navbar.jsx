import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <div className="block1">
                </div>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <p>FitMe</p>
                </Link>
                <div className="block1">
                </div>
            </div>
            <div className="navbar_links">
                <NavLink to='/workouts' style={{ textDecoration: "none" }} >
                    <p>Workouts</p>
                </NavLink>
                <NavLink to='/nutrition' style={{ textDecoration: "none" }}>
                    <p>Nutrition</p>
                </NavLink>
                <NavLink to='/shop' style={{ textDecoration: "none" }} >
                    <p>Shop</p>
                </NavLink>
                <NavLink to='/aboutus' style={{ textDecoration: "none" }} >
                    <p>About Us</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
