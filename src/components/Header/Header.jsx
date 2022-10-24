import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="Знак радиации." />
      <ul className={styles.header__nav}>
        <li className={styles.button}>
          <div className={styles.button__text}>Напряженная&nbsp;зона</div>
        </li>
        <li className={styles.button}>
          <div className={styles.button__text}>Укрытие</div>
          <div className={styles.button__wrapper}>
            <div className={styles.button__arrow}></div>
            <div className={styles.button__borderCircle}></div>
            <div className={styles.button__maskCircle}>
              <div className={styles.button__smallCircle}></div>
            </div>
          </div>
        </li>
      </ul>
      <ul className={styles.header__extendingNav}>
        <li className={styles.button}>
          <div className={styles.button__text}>Волонтёрство</div>
        </li>
        <li className={styles.button}>
          <div className={styles.button__text}>Новости</div>
        </li>
      </ul>
    </header>

  );
}