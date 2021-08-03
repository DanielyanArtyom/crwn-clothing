import React from 'react'

import { useSelector } from 'react-redux'
import { selectCollections } from '../../redux/shop/shopSelectors'
import CollectionsOveriew from '../../components/collectionsOveriew/CollectionsOveriew'
import CollectionPage from '../collection/CollectionPage'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => {

    const collections = useSelector(selectCollections)
    console.log(match)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOveriew} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
    )
}


export default ShopPage