import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_VuA0KyJKOIm67U97yZ2jtqKm00Obu9Zz5a";

    const onToken = (token) => {
        console.log("[TOKEN]", token);
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing LTD."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/JVK.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;