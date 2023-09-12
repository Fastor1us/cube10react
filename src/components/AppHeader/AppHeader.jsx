import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AppHeader.module.css'


export default function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.navPanel}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to='/game/1' className={styles.link}>
              Game1
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/game/2' className={styles.link}>
              Game2
            </NavLink>
          </li>
          <li className={styles.menuLogo}>
            <NavLink to='/' className={styles.link}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/profile' className={styles.link}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
