import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { logUserIn, logUserOut } from "../../features/loginSlice";
// import heroimage from '../../images/main.jpg';

const Navbar = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // //Not handling session management as of now
    // function handleSignOut() {
    //     dispatch(logUserOut())
    //     //navigate('/logout')
    //     window.location.reload();
    // }

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
                {/* <NavLink to='/nutrition' style={{ textDecoration: "none" }}>
                        <p>Nutrition</p>
                    </NavLink> */}
                <NavLink to='/shop' style={{ textDecoration: "none" }} >
                    <p>Shop</p>
                </NavLink>
                <NavLink to='/aboutus' style={{ textDecoration: "none" }} >
                    <p>About Us</p>
                </NavLink>
                {/*<button className='signOut' onClick={handleSignOut}>Log Out</button>*/}
            </div>
        </div>
    )

}

export default Navbar
