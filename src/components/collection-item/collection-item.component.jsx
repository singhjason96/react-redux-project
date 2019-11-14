import React, {useState} from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    console.log(item);
    return(
    <div className="card">
            <img className="image" style={{backgroundImage: `url(${imageUrl})`}}  />
        <div className="card-body">
                <span className="name">{name}</span>
                <span className="price">  ${price}</span>
        </div>
       
        <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </div>

)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);