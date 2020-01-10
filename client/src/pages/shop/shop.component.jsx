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
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false});
    })
  }
  render(){
    const { match } = this.props;
    const { loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading}{...props}/>} />
        <Route path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading ={loading} {...props}/>} />
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