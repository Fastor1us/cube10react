import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Game1.module.css';

import CreateField from './CreateField/CreateField';
import { current } from '@reduxjs/toolkit';


export default function Game1() {
  const { data } = useSelector(state => state.gamesData);
  const [currentLevel, setCurrentLevel] = React.useState(1);

  return (
    <>
      <h1>Game1</h1>
      <CreateField />
      <section className={styles.gameSection}>
        <ul className={styles.gameField}>
          {data && data[0].levels[0].fields.map((item) => {
            return (item.map((item, index) => {
              return (<li key={index} className={styles.cell}>
                {`${index}.${index}`}
              </li>)
            }))
          })}
        </ul>
      </section>
      <nav className={styles.navLevelPanel}>
        <h2>Выберите уровень</h2>
        <ul className={styles.navLevelsList}>
          {data && data[0].levels.map((item, index) => {
            return (<li key={index} className={styles.navLevel}>
              {index + 1}
            </li>)
          })}
        </ul>
      </nav>
    </>
  );
}

