import React from 'react'
import CustomButton from '../customButton/CustomButton'
import CartItem from '../cartItem/CartItem'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cartSelectors'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessage } from './cartDropdown.styles'

const CartDropdown = ({ history }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        :
                        (<EmptyMessage> Your cart is Empty</EmptyMessage>)
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

export default withRouter(CartDropdown)