import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item.js/checkout-item";
import "./checkout.scss";

const CheckoutPage = ({ cartItems }) => {

    const calcTotal = () => {
        return cartItems && cartItems.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    }

    return (
        <div className="checkout-page" >
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem, index) => {
                    return <CheckoutItem
                        key={index}
                        cartItem={cartItem}
                    />
                })
            }
            <div className="total">
                <span>TOTAL: ${calcTotal()}</span>
            </div>
        </div>
    )
}


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps, null)(CheckoutPage);