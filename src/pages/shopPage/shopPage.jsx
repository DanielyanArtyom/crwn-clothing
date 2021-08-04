import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateCollections } from '../../redux/shop/shopActions'

import CollectionsOveriew from '../../components/collectionsOveriew/CollectionsOveriew'
import CollectionPage from '../collection/CollectionPage'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase'

const ShopPage = ({ match }) => {
    const unsubscribeFromSnapshot = null
    const dispatch = useDispatch()


    React.useEffect(() => {

        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotsToMap(snapshot)
            dispatch(updateCollections(collectionsMap))
        })
        return
    }, [])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOveriew} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
    )
}


export default ShopPage