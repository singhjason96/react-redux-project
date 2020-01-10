import React from 'react';
// import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import {MenuContainer, ContentContainer, TitleContainer } from './menu-item.styles';

const MenuItem = ({title, history, linkURL, match}) => (
    <MenuContainer onClick={() => history.push(`${match.url}${linkURL}`)} >
                <ContentContainer>
                    <TitleContainer>{title}</TitleContainer>
                    
                </ContentContainer>
    </MenuContainer>
)

export default withRouter(MenuItem);