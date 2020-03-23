import React, { memo } from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = memo(({ toggleCartHidden, cartItems }) => {

    const setCount = () => {
        return cartItems && cartItems.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }

    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{setCount()}</span>
        </div>
    )
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);