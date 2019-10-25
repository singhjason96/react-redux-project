import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className="ui card">
        
            <img src={`${imageUrl}`} className="image" />
        
        <div className="description">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
        </div>
    </div>
)

export default CollectionItem;