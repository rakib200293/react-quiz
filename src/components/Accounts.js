import {Link} from 'react-router-dom'
import React from "react";

const Accounts = () => {
    return (
        <div className="account">
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Accounts;
