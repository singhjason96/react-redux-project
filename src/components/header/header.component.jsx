import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/scooby-doo-1.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="ui menu">
        <div className="header-item">
             <Link className="logo-container" to="/">
                 <Logo className="logo"/>
             </Link>
         </div>
         <div className="options">
             <Link className="item" to="/shop">
                 SHOP
             </Link>
             <Link className="item" to="/shop">Conact
             </Link>
         </div>
    </div>
)

export default Header;