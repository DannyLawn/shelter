import React from 'react';
import logo from '../../images/logo.png';
import logoHovered from '../../images/logoHovered.png';
import styles from './Header.module.scss';

export default function Header({ handleNewsPage, handleShelterPage, handleDZonePage, openMainIntro }) {

  const [hoverLogo, setHoverLogo] = React.useState(false);

  function toggleHoverLogo() {
    setHoverLogo(!hoverLogo);
  }


  return (
    <header className={styles.header}>
      <div className={styles.imgContainer} onMouseEnter={toggleHoverLogo} onMouseLeave={toggleHoverLogo}>
        { Boolean(!hoverLogo) ? (<img src={logo} className={styles.imgContainer__logo} alt="Знак радиации." onClick={openMainIntro} />) : (<img src={logoHovered} className={styles.imgContainer__logo} alt="Знак радиации." onClick={openMainIntro}/>) }
      </div>  
      <ul className={styles.header__nav}>
        <li className={styles.button} onClick={handleDZonePage}>
          <div className={styles.button__text}>Напряженная&nbsp;зона</div>
        </li>
        <li className={styles.button} onClick={handleShelterPage}>
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
        <li className={styles.button} onClick={handleNewsPage}>
          <div className={styles.button__text}>Новости</div>
        </li>
      </ul>
    </header>

  );
}