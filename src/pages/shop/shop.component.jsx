import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    // const collectionRef = firestore.collection('collections');

    // collectionRef.onSnapshot(async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     // console.log(collectionsMap)
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    // });

    /**
     * Promises:
     * const collectionRef = firestore.collection('collections');
     * collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
    })
     */

    /**
     * Fetch Pattern:
     * fetch('https://firestore.googleapis.com/v1/projects/crwn-db-267ca/databases/(default)/documents/collections')
     * .then(response => response.json())
     * .then(collections => console.log(collections))
     */

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);