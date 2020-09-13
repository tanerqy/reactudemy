import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero__content">
          <h1>Modern Day Fashion</h1>
          <h3>A way to express yourself</h3>
          <button className="hero__button">Browse Fall Collection</button>
        </div>

        <div className="hero__image">
          <img src="img/hero1.jpg" alt="" />
        </div>
      </div>
      <Directory />
    </div>
  )
}

export default Homepage
