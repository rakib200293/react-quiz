import React from "react";
import singupImage from "../assets/images/signup.svg";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={singupImage} alt="Signup" />
                </div>
                <LoginForm />
            </div>
        </>
    );
};

export default Login;
