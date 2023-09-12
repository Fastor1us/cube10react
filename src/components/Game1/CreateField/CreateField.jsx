import React, { useState } from 'react';

import styles from './CreateField.module.css';


//TODO захардкодить максимально допустимые размеры полей
//TODO сделать calc размеры в стилях и вынести общую отправную точку в переменную
// что бы в дальнейшем можно было изменять размеры через изменение переменной
export default function CreateField() {
  const [fieldSize, setFieldSize] = useState(4);
  // const [isFieldCreated, setIsFieldCreated] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // setIsFieldCreated(true);
  }

  const onButtonClick = (e) => {
    e.target.name === 'increment' ?
      (fieldSize + 1 < 9 && setFieldSize(fieldSize + 1)) :
      (fieldSize - 1 > 3 && setFieldSize(fieldSize - 1));
  }

  const onInputChange = (e) => {
    (e.target.value > 3 && e.target.value < 9) ? setFieldSize(e.target.value) : setFieldSize(fieldSize);
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <button type='button' className={`${styles.button} ${styles.buttonDecrement}`} name='decrement' onClick={onButtonClick}>
          -
        </button>
        <input type='number' value={fieldSize} name='field-size' className={styles.input} onChange={onInputChange} />
        <button type='button' className={`${styles.button} ${styles.buttonIncrement}`} name='increment' onClick={onButtonClick}>
          +
        </button>
        <button type='submit' className={styles.submitButton}>
          Создать поле
        </button>
      </form>
      {/* {
        isFieldCreated &&
        <section className={styles.gameField}>
          {Array(fieldSize * fieldSize).fill(0).map((_, i) => {
            return (
              <div key={i} className={styles.cell}>
                1
              </div>
            )
          })}
        </section>
      } */}
    </>
  );
}
