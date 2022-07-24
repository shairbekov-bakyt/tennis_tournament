import React from "react";
import './header.css'
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <div>
            <ul className="navbar">
                <li className="navbar__link" onClick={() => navigate('/')}>Main Page</li>
                <li className="navbar__link" onClick={() => navigate('/about')}>About Us</li>
                <li className="navbar__link" onClick={() => navigate('/tournament')}>Tournament</li>
                <li className="navbar__link" onClick={() => navigate('/champion')}>Champions</li>
            </ul>
        </div>
    )
}

export default Header