import React from "react";

const Button = ({ children }) => {
    return (
        <button className="button">
            <span>{children}</span>
        </button>
    );
};

export default Button;
