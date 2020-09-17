import React, { useContext } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cartProvider/cart.provider'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(({ item, quantity }) => (
          <CartItem item={item} quantity={quantity} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
