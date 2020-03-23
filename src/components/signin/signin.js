import React from "react";
import FormInput from "../form-input/form-input";
import Button from "../custom-button/button";
import { signInWithGoogle } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import "./signin.scss";

class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span style={{ marginBottom: "20px" }}>Sign in with your e-mail and password</span>
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
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;