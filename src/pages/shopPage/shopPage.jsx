import React from 'react'

import { useDispatch } from 'react-redux'
import { updateCollections } from '../../redux/shop/shopActions'
import WithSpinner from '../../components/withSpinner/withSpinner'

import CollectionsOveriew from '../../components/collectionsOveriew/CollectionsOveriew'
import CollectionPage from '../collection/CollectionPage'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase'


const CollectionsOveriewWithSpinner = WithSpinner(CollectionsOveriew)
const CollectionspageWithSpinner = WithSpinner(CollectionPage)


const ShopPage = ({ match }) => {
    let unsubscribeFromSnapshot = null
    const dispatch = useDispatch()

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const collectionRef = firestore.collection('collections')
        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = await convertCollectionsSnapshotsToMap(snapshot)
            dispatch(updateCollections(collectionsMap))
            setLoading(false)
        })
        // return unsubscribeFromSnapshot()
    }, [])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOveriewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionspageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}


export default ShopPage