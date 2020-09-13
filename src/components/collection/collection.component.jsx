import React from 'react'
import './collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
        {/* //perfomrance issue */}
      </div>
    </div>
  )
}

export default Collection
