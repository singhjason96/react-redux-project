import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import {selectCollections} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections.overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    })
  }
  render(){
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
  dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);