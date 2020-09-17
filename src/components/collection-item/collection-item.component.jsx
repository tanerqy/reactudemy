import React, { useContext } from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../context/cartProvider/cart.provider'

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const { addItem, cartItems } = useContext(CartContext)

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem({ id, name, imageUrl, price })}>
        Add to Cart
      </CustomButton>
    </div>
  )
}

export default CollectionItem
