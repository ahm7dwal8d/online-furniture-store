import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [state, setState] = useState(false)
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
                <form action="">
                    <input
                        type="search"
                        placeholder="Looking For ...."
                    />
                    <button
                        type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                        </button>
                </form>
                <div
                    className="header-icon"
                    onClick={() => setState(!state)}>
                    <FontAwesomeIcon 
                    icon={faBars} />
                </div>
            </div>
            {state && (
                <div className="mobile-links">
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