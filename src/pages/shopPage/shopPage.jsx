import React from 'react'

import { useDispatch } from 'react-redux'
import { fetchCollectionStart } from '../../redux/shop/shopActions'
import { Route } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'

const CollectionsOveriewContainer = React.lazy(() => import('../../components/collectionsOveriew/collectionOveriew.container'))
const CollectionPageContainer = React.lazy(() => import('../collection/collection.container'))


const ShopPage = ({ match }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchCollectionStart())
    }, [dispatch])

    return (
        <div className="shop-page">
            <React.Suspense fallback={<Spinner />}>

                <Route exact path={`${match.path}`} component={CollectionsOveriewContainer} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
            </React.Suspense>
        </div>
    )
}


export default ShopPage