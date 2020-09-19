import React, { useState, useContext } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import DirectoryContext from '../../context/directory/directory.context'

const Directory = () => {
  const directory = useContext(DirectoryContext)
  const [sections, setSections] = useState(directory)

  return (
    <div className="directory-menu">
      <h2 className="directory__heading">Fall Collections</h2>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Directory
