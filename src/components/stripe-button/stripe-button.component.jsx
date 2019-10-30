import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_grnRJ9anb5BG7ZkVHYTxgi2P00J0bio9BC';

    const onToken = token => {
        console.log(token);
        alert('Payment Made');
    }

    return (
        <StripeCheckout 
        label= 'Pay Now'
        name="Clothing Store"
        billingAddress
        shippingAddress
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;