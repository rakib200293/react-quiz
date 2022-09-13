import React from "react";
import singupImage from "../assets/images/signup.svg";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const Login = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={singupImage} alt="Signup" />
                </div>
                <Form className="login">
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    ></TextInput>
                    <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>

                    <Button>Submit now</Button>
                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Login;
