import React from 'react'
import './cartDropdown.scss'
import CustomButton from '../customButton/CustomButton'
import CartItem from '../cartItem/CartItem'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cartSelectors'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartDropdown = ({ history }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                        :
                        (<span className='empty-message'> Your cart is Empty</span>)
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown)