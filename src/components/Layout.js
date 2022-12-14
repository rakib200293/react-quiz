import React from "react";
import Nav from "./Nav";
const Layout = ({ children }) => {
    console.log(children);
    return (
        <>
            <Nav />
            <main className="main">
                <div className="container">{children}</div>
            </main>
        </>
    );
};

export default Layout;
