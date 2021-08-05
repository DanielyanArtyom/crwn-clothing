import React from 'react'

import { useDispatch } from 'react-redux'
import { fetchCollectionStart } from '../../redux/shop/shopActions'
import CollectionPageContainer from '../collection/collection.container'
import CollectionsOveriewContainer from '../../components/collectionsOveriew/collectionOveriew.container'
import { Route } from 'react-router-dom'



const ShopPage = ({ match }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchCollectionStart())
    }, [dispatch])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOveriewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
        </div>
    )
}


export default ShopPage