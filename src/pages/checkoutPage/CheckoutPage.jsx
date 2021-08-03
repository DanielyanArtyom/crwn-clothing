import React from 'react'
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './checkoutPage.styles'

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
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <TotalContainer>TOTAL: ${cartItemsTotal} </TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 12/23 - CVV: 123
            </WarningContainer>
            <StripeButton price={cartItemsTotal} />
        </CheckoutPageContainer>
    )
}


export default CheckoutPage