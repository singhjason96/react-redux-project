import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, history, linkURL, match}) => (
    <div className="menu-item" onClick={() => history.push(`${match.url}${linkURL}`)}>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
    </div>
)

export default withRouter(MenuItem);