import { takeLatest, call, all, put } from "redux-saga/effects";
import ShopActionTypes from "./shopTypes";
import { firestore, convertCollectionsSnapshotsToMap } from "../../firebase/firebase";
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shopActions'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotsToMap, snapshot)

        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}