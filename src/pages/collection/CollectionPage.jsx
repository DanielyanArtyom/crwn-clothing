import React from 'react'
import './collection.scss'
import CollectionItem from '../../components/item-collection/collectionItem'
import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop/shopSelectors'

const CollectionPage = ({ match }) => {
    const collection = useSelector((state) => selectCollection(match.params.categoryId)(state))
    const { title, items } = collection

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}


export default CollectionPage