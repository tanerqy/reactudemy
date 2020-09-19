import React, { useContext } from 'react'
import './checkout.styles.scss'
import { CartContext } from '../../context/cartProvider/cart.provider'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = () => {
  const { cartItems, total } = useContext(CartContext)

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
      {!cartItems
        ? 'NOTHING HERE'
        : cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} {...cartItem} />)}
      <h1>Total: {total}</h1>
    </div>
  )
}

export default CheckoutPage
