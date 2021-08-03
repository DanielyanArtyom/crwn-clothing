import React from 'react'
import './checkout.scss'

import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import { createStructuredSelector } from 'reselect'
import StripeButton from '../../components/stripeButton/StripeButton'


const CheckoutPage = () => {
    const { cartItems, cartItemsTotal } = useSelector(createStructuredSelector({
        cartItems: selectCartItems,
        cartItemsTotal: selectCartTotal
    }))
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
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
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className='total'>TOTAL: ${cartItemsTotal} </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 12/23 - CVV: 123
            </div>
            <StripeButton price={cartItemsTotal} />
        </div>
    )
}


export default CheckoutPage