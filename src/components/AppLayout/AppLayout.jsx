import React from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';

import styles from './AppLayout.module.css';

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
