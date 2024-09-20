import React from "react";
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo"> First and Logo </a>
            </div>

            <div className="navbar-center">
                <li>
                    <a href="/" className="navbar-names"> Experience </a>
                </li>
            </div>

            <div className="navbar-center">
                <li>
                    <a href="/" className="navbar-names"> Project </a>
                </li>
            </div>

            <div className="navbar-center">
                <li>
                    <a href="/" className="navbar-names"> Contact </a>
                </li>
            </div>

            <div className="navbar-left"></div>
                <li>
                    <a href="/" className="navbar-icon"> Icon </a>
                </li>
        </nav>
    )
}
export default Navbar;