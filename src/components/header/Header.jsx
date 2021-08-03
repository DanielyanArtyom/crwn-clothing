import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown-logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartIcon from '../carIcon/cartIcon'
import CartDropdown from '../cart/CartDropdown'
import { auth } from '../../firebase/firebase'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

const Header = () => {

    const currentUser = useSelector((state) => selectCurrentUser(state))
    const cartHidden = useSelector((state) => selectCartHidden(state))

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                        <Link className='option' to='/signIn'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                cartHidden && <CartDropdown />
            }
        </div>
    )
}

export default Header