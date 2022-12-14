import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Accounts = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div className="account">
            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span className="material-icons-outlined" title="Logout" onClick={logout}>
                        logout
                    </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
};

export default Accounts;
