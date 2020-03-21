import React from "react";
import FormInput from "../form-input/form-input";
import Button from "../custom-button/button";
import "./signin.scss";

class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: "", password: "" })
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span style={{marginBottom: "20px"}}>Sign in with your e-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label>E-mail</label>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <label>Password</label>
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;