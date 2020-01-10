import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price, name}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_grnRJ9anb5BG7ZkVHYTxgi2P00J0bio9BC';
    console.log(name);
    console.log(price);
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token,
           }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment Error: ', (error));
            alert('There was an issue with your payment')
        });
    }

    return (
        <StripeCheckout 
        label= 'Pay Now'
        name="Clothing Store"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;