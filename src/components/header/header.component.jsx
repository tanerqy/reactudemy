import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import firebase, { auth } from '../../firebase/firebase.utils'
import { withRouter } from 'react-router-dom'

const Header = ({ user, history }) => {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="Logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="header__nav">
        <li className="header__link">
          <Link to="/">Home</Link>
        </li>
        <li className="header__link">
          <Link to="/shop">Shop</Link>
        </li>
        {!user ? (
          <li className="header__link">
            <Link to="/signin">Sign In</Link>
          </li>
        ) : (
          <li className="header__link">
            <Link to="/signout">Sign Out</Link>
          </li>
        )}
        <li className="header__link">
          <Link to="/">Kontakt</Link>
        </li>
      </ul>
      <ul className="header__icons">
        <li className="header__icon">Fb</li>
        <li className="header__search">🔍</li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
