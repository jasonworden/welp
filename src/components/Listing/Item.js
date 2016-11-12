import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

import Rating from 'components/Rating/Rating'
import styles from './styles.module.css'

export const Item = (props) => (
  <div className={styles.item}>
    <h1 className={classnames(styles.title)}>{props.place.name}</h1>
    <span>{props.place.rating/5}</span>
  </div>
)

export default Item
