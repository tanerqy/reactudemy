import React, { Component } from 'react'
import SHOP_DATA from './shoppingdata'
import './shop.styles.scss'
import { Link } from 'react-router-dom'
import CollectionPreview from '../../components/collection/collection.component'
import image from '../../assets/hero1.jpg'

export default class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        <div style={{ backgroundImage: `url(${image})` }} className="shop-page__hero">
          <h1>Shop</h1>
        </div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}
