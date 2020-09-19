import React, { useContext } from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'

import CollectionsContext from '../../context/collection/collection.context'

import './collections.styles.scss'

const CollectionsPage = ({ match }) => {
  const collections = useContext(CollectionsContext)
  const collection = collections.find((col) => col.routeName === match.params.collectionID)
  const { title, items } = collection

  return (
    <div className="collection-page">
      {collections.map}
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionsPage
