import React, { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { CartContext } from '../../context/cartProvider/cart.provider'

const CartIcon = () => {
  const { toggleHidden, cartCount } = useContext(CartContext)
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
