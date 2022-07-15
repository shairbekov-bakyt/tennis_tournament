import React from "react";
import './header.css'

function Header() {
    return (
        <div>
            <ul className="navbar">
                <li className="navbar__link">Main Page</li>
                <li className="navbar__link">About Us</li>
                <li className="navbar__link">Tournament</li>
                <li className="navbar__link">Champions</li>
            </ul>
        </div>
    )
}
export default Header