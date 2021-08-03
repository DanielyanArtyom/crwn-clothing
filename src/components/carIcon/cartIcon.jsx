import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'

import { CartIconContainer, ItemCount } from './cartIcon.styles'

const CartIcon = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(({ cart }) => {
        return cart.cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
    })

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartItems}</ItemCount>
        </CartIconContainer>
    )
}


export default CartIcon