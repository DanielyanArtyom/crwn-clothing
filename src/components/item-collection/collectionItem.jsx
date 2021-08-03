import React from 'react'
import './collectionItem.scss'

import { addItem } from '../../redux/cart/cartActions'
import CustomButton from '../customButton/CustomButton'

import { useDispatch } from 'react-redux'

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => dispatch(addItem(item))} >Add to Cart</CustomButton>
        </div>
    )
}

export default CollectionItem