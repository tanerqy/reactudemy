import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item, quantity }) => (
  <div className="cart-item" key={item.id}>
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {quantity} x ${item.price}
      </span>
    </div>
  </div>
)

export default CartItem
