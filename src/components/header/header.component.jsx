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
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        
             <LogoContainer to="/">
                 <Logo className="logo"/>
             </LogoContainer>
         
         <OptionsContainer>
             {
                 currentUser?
                 <OptionDiv onClick={()=> auth.signOut()}>Sign Out</OptionDiv> 
                 :
                 <OptionLink to="/signin">SIGN IN</OptionLink>
             }
             <CartIcon className="cart-icon"/>
         </OptionsContainer>
         {
             hidden ? null:
             <CartDropdown />

         }
         
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);