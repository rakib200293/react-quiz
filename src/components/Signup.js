import React from "react";
import { Link } from "react-router-dom";
import singupImage from "../assets/images/signup.svg";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import SignupForm from "./SignupForm";
import TextInput from "./TextInput";

const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={singupImage} alt="Signup" />
                </div>
                <SignupForm />
            </div>
        </>
    );
};

export default Signup;
