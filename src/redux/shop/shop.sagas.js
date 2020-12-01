import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.action'

import ShopActionTypes from './shop.types';

// function* is a generator function

// It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test. 
// (if you're not familiar with them here are some introductory links) By doing so, 
// these asynchronous flows look like your standard synchronous JavaScript code. 
// (kind of like async/await, but generators have a few more awesome features we need)
// You might've used redux-thunk before to handle your data fetching. Contrary to redux thunk, 
// you don't end up in callback hell, you can test your asynchronous flows easily and your actions stay pure.

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
};

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}