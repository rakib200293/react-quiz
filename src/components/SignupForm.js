import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { async } from "@firebase/util";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { signUp } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Do something");
        // do validation
        if (password !== confirmPassword) {
            return setError("Password don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signUp(email, password, username);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create account");
        }
    }

    return (
        <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter name"
                icon="person"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></TextInput>
            <TextInput
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></TextInput>
            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></TextInput>
            <TextInput
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            ></TextInput>
            <Checkbox
                text="I agree to the Terms & Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            ></Checkbox>
            <Button disabled={loading} type="submit">
                Submit now
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SignupForm;
