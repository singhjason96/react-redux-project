import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem } from '../../redux/cart/cart.actions';
import {CardContainer, ImageContainer, CardBodyContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    console.log(item);
    return(
    <CardContainer className="card">
            <img className="image" style={{backgroundImage: `url(${imageUrl})`}}  />
        <CardBodyContainer>
                <span className="name">{name}</span>
                <span className="price">  ${price}</span>
        </CardBodyContainer>
       
        <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </CardContainer>

)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);