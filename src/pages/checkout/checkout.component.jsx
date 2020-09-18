import React, { useContext } from 'react'
import './checkout.styles.scss'
import { CartContext } from '../../context/cartProvider/cart.provider'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {console.log(cartItems)}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
    </div>
  )
}

export default CheckoutPage
