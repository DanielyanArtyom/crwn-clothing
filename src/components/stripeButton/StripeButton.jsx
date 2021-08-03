import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishKey = 'pk_test_51JJLKhCCQleB3Q57rXlrrj8z2hH7XVzoahzeh8aSs99pxCGHv8DNAe1QCpIN7k8NdYERgerfGL95ufVBVemOgpep000eQgfRR3'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}


export default StripeButton