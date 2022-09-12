import React from "react";
import Accounts from "./Accounts";
import "../styles/nav.css";
import Logo from "../assets/images/logo.png";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="index.html" className="brand">
                        <img src={Logo} alt="Learn with Sumit Logo" />
                        <h3>Quiz with Rakib</h3>
                    </a>
                </li>
            </ul>
            <Accounts />
        </nav>
    );
};

export default Nav;
