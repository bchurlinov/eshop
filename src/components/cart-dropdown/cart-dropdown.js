import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import Button from "../custom-button/button";
import "./cart-dropdown.scss";

const Cart = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length !== 0 ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <Button onClick={() => history.push("/checkout")}>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default withRouter(connect(mapStateToProps, null)(Cart));