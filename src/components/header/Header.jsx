import React from 'react'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import { ReactComponent as Logo } from '../../assets/crown-logo.svg'
import { useSelector } from 'react-redux'

import CartIcon from '../carIcon/cartIcon'
import CartDropdown from '../cart/CartDropdown'
import { auth } from '../../firebase/firebase'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { signOutStart } from '../../redux/user/userActions'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => selectCurrentUser(state))
    const cartHidden = useSelector((state) => selectCartHidden(state))

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/shop'>Contact</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink> :
                        <OptionLink to='/signIn'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                cartHidden && <CartDropdown />
            }
        </HeaderContainer>
    )
}

export default Header