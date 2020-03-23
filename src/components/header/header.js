import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/071 crown.svg";
import { auth } from "../../firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CardDropdown from "../cart-dropdown/cart-dropdown";
import "./header.scss";

const Header = ({ currentUser, hidden }) => {

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
                <CartIcon />
            </div>

            {
                !hidden && <CardDropdown />
            }

        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return {
        currentUser,
        hidden
    }
}

export default connect(mapStateToProps, null)(Header);