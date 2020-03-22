import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/071 crown.svg";
import { auth } from "../../firebase/firebase";
import "./header.scss";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>

        </div>
    )
}

export default Header;