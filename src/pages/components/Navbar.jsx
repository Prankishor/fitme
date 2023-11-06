import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom'
// import { logUserIn, logUserOut } from "../../features/loginSlice";
// import heroimage from '../../images/main.jpg';


const Menu = () => (
    <>
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
    </>
)

const Navbar = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // //Not handling session management as of now
    // function handleSignOut() {
    //     dispatch(logUserOut())
    //     //navigate('/logout')
    //     window.location.reload();
    // }

    const [toggleMenu, setToggleMenu] = useState(false);

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
                <Menu />
                {/*<button className='signOut' onClick={handleSignOut}>Log Out</button>*/}
            </div>

            <div className="navbar_menu">
                {toggleMenu ?
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> :
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar_menu_container scale-up-center">
                        <div className="navbar_menu_container_links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Navbar
