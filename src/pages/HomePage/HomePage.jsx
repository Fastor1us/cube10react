import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';


export default function HomePage() {
  const data = useSelector((state) => state.gamesData.data);
  return (
    <>
      <h1>HomePage</h1>
      <p className={styles.paragraph}>
        Тут пока ничего нет
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat voluptate blanditiis
        asperiores ipsa modi delectus unde corrupti velit! Asperiores adipisci id voluptate eum aliquam,
        debitis tempora exercitationem architecto beatae.
      </p>
      <section >
        <ul className={styles.gameList}>
          {data.map(({ id, name }) => (
            <Link key={id} to={`/game/${id}`}>
              <li className={styles.gameItem}>
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
