import React from "react";
import Nav from "./Nav";
import "../styles/layout.css";
const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main class="main">
                <div class="container">{children}</div>
            </main>
        </>
    );
};

export default Layout;
