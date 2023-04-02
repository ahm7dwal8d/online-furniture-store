import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context/createContext";

function NavBar() {
    const [state, setState] = useState(false);
    const { switchTheme, theme, Product } = useContext(AppContext);
    return (
        <div className="navbar">
            <div className="container">
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About Us</NavLink>
                    <NavLink to='/Product'>Product</NavLink>
                    <NavLink to='/Blog'>Blog</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>
                </ul>
                <div
                    className="header-icon"
                    onClick={() => setState(!state)}>
                    <FontAwesomeIcon 
                    icon={faBars} />
                </div>
                <div className="section">
                    <button
                        className="me-2 border-0 bg-transparent text-white"
                        onClick={switchTheme}>
                    <FontAwesomeIcon
                        style={{transition: '1s linear'}}
                        icon={theme === 'light' ? faMoon : faSun} />
                </button>
                <Link
                    className="p-2 border rounded text-white text-capitalize fs-6 text-decoration-none"
                    to='/CartPage'>
                    <span className="text-primary">{Product.length}</span>
                    <span> cart</span>
                </Link>
                </div>
            </div>
            {state && (
                <div
                    className="mobile-links"
                    onClick={() => setState(false)}>
                    <div
                        className="close-btn"
                        onClick={() => setState(false)}>x</div>
                <ul>
                        <NavLink
                            to='/'
                            onClick={() => setState(false)}
                        >Home</NavLink>
                        <NavLink
                            to='/About'
                            onClick={() => setState(false)}
                        >About Us</NavLink>
                        <NavLink
                            to='/Product'
                            onClick={() => setState(false)}
                        >Product</NavLink>
                        <NavLink
                            to='/Blog'
                            onClick={() => setState(false)}
                        >Blog</NavLink>
                        <NavLink
                            to='/Contact'
                            onClick={() => setState(false)}
                        >Contact</NavLink>
                </ul>
                </div>
            )}
        </div>
    )
}

export default NavBar;