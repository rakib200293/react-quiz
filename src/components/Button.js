import React from "react";

const Button = ({ children }) => {
    return (
        <div className="button">
            <span>{children}</span>
        </div>
    );
};

export default Button;
