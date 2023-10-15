import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './CSS/Pizzawindow.css';

const Indexes = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <div className="Set">
        <StripeCheckout
            label='Pay Now'
            name='SJ Co'
            billingAddress
            shippingAddress
            image='https://www.clipartkey.com/mpngs/m/194-1949037_clip-art-credit-card-logos-clip-art-mode.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
        </div>
    )
}

export default Indexes;