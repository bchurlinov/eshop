import React from "react";
import FormInput from "../form-input/form-input";
import Button from "../custom-button/button";

import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./signup.scss";

class SignUp extends React.Component {

    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleSubmit = async e => {

        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (err) {
            console.error(err);
        }

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your e-mail and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="E-mail"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm password"
                        required
                    />
                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;
