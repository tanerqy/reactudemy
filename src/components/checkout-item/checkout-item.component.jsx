import React, { useContext } from 'react'
import './checkout-item.styles.scss'

import { CartContext } from '../../context/cartProvider/cart.provider'

const CheckoutItem = ({ item: { imageUrl, name, price, id }, quantity }) => {
  const { removeItem, addItem, clearItemFromCart } = useContext(CartContext)

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem({ id, name, imageUrl, price })}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem({ id, name, imageUrl, price })}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart({ id, name, imageUrl, price })}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
