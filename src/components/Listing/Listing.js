import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Item from './Item'
import styles from './styles.module.css'

export const Listing = (props) => (
  <div className={classnames(style.container)}>
    {props.places.map(place => (
      <Item
        place={place}
        onClick={props.onClick}
        key={place.id} />
    ))}
  </div>
)

export default Listing
