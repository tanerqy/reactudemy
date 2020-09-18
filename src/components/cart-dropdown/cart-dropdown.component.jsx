import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cartProvider/cart.provider'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(({ item, quantity }) => <CartItem item={item} quantity={quantity} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>
        <Link to="/checkout">GO TO CHECKOUT</Link>
      </CustomButton>
    </div>
  )
}

export default CartDropdown
