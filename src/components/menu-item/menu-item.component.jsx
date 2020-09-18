import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div
    className={`${size} menu-item`}
    //NOTE wegen withRouter haben wir hier zugriff auf history und match props, ohne ppropdrilling
    onClick={() => history.push(`${match.url}collection/${title.toLowerCase()}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
