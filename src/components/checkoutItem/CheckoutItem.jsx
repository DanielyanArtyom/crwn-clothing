import React from 'react'
import './checkoutItem.scss'
import { useDispatch } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cartActions'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </div>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
        </div>
    )
}


export default CheckoutItem