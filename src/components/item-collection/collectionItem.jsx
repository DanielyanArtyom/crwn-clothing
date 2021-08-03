import React from 'react'
import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from './itemCollection.styles'

import { addItem } from '../../redux/cart/cartActions'

import { useDispatch } from 'react-redux'

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => dispatch(addItem(item))} >Add to Cart</AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem