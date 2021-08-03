import React from 'react'
import { StyledCartItem, StyledImage, ItemDetails, StyledNameText } from './CartItem.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <StyledCartItem>
            <StyledImage src={imageUrl} alt={imageUrl} />
            <ItemDetails>
                <StyledNameText>{name}</StyledNameText>
                <StyledNameText> {quantity} x ${price}</StyledNameText>
            </ItemDetails>
        </StyledCartItem>
    )
}


export default CartItem