import React, { useContext } from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import CurrentUserContext from '../../context/current-user/current-user.context'
import { CartContext } from '../../context/cartProvider/cart.provider'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import logo from '../../assets/Logo.png'

const Header = () => {
  const currentUser = useContext(CurrentUserContext)
  const { hidden } = useContext(CartContext)
  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className="header__nav">
        <li className="header__link">
          <Link to="/">Home</Link>
        </li>
        <li className="header__link">
          <Link to="/shop">Shop</Link>
        </li>
        {!currentUser.currentUser ? (
          <li className="header__link">
            <Link to="/signin">Sign In</Link>
          </li>
        ) : (
          <li className="header__link">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                auth.signOut()
              }}
            >
              Sign Out
            </a>
          </li>
        )}
        <li className="header__link">
          <Link to="/">Kontakt</Link>
        </li>
      </ul>
      <ul className="header__icons">
        <li>
          <CartIcon />
        </li>
      </ul>
      {hidden ? null : <CartDropdown />}
    </nav>
  )
}

export default Header
