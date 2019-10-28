import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/scooby-doo-1.svg';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className="ui menu">
        <div className="header-item">
             <Link className="logo-container" to="/">
                 <Logo className="logo"/>
             </Link>
         </div>
         <div className="options">
             <Link className="item" to="/shop">CART</Link>
             {
                 currentUser?
                 <div className="item" onClick={()=> auth.signOut()}>Sign Out</div> 
                 :
                 <Link className="item" to="/signin">SIGN IN</Link>
             }
         </div>
    </div>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect()(Header);