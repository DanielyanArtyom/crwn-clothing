import React from 'react'
import './cartIcon.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartIcon = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(({ cart }) => {
        return cart.cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
    })

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItems}</span>
        </div>
    )
}


export default CartIcon