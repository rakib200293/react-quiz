import React from "react";
import {Link} from 'react-router-dom';
import singupImage from "../assets/images/signup.svg";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={singupImage} alt="Signup" />
                </div>
                <Form className="signup">
                    <TextInput type="text" placeholder="Enter name" icon="person"></TextInput>
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    ></TextInput>
                    <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>
                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                    ></TextInput>
                    <Checkbox text="I agree to the Terms & Conditions"></Checkbox>
                    <Button>Submit now</Button>
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Signup;
