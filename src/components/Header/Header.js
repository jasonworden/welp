import React from 'react';
import { Link } from 'react-router';

import styles from './styles.module.css';

export const Header = (props) => (
  <header className={styles.topbar}>
    <Link to="/"><h1>Welp</h1></Link>
    <section>J$ON Payload</section>
  </header>
)

export default Header
