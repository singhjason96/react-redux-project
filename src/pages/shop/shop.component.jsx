import React from 'react';
import SHOP_DATA from '../../Products.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import Header from '../../components/header/header.component.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className="shop-page">
                <Header />
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;