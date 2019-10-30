import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/scooby-doo-1.svg';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({currentUser, hidden}) => (
    <div className="ui menu">
        <div className="header-item">
             <Link className="logo-container" to="/">
                 <Logo className="logo"/>
             </Link>
         </div>
         <div className="options">
             {
                 currentUser?
                 <div className="item" onClick={()=> auth.signOut()}>Sign Out</div> 
                 :
                 <Link className="item" to="/signin">SIGN IN</Link>
             }
             <CartIcon />
         </div>
         {
             hidden ? null:
             <CartDropdown />

         }
         
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);