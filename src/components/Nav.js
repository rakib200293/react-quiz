import {Link} from 'react-router-dom'
import React from "react";
import Accounts from "./Accounts";
import Logo from "../assets/images/logo.png";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/" className="brand">
                        <img src={Logo} alt="Learn with Sumit Logo" />
                        <h3>Quiz with Rakib</h3>
                    </Link>
                </li>
            </ul>
            <Accounts />
        </nav>
    );
};

export default Nav;
