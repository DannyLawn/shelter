import React from 'react';
import logo from '../../images/logo.png';
import logoHovered from '../../images/logoHovered.png';
import { useDispatch, useSelector } from 'react-redux';
import { openNewsPage, openDZonePage, openMainPage, openShelterPage, openVolunteeringPage, changeNukeHover } from '../../services/slices/app-navigation-slice';
import styles from './Header.module.scss';

export default function Header() {

  const dispatch = useDispatch();
  const { nukeHover } = useSelector(store => store.appNavigation);


  return (
    <header className={styles.header}>
      <div className={styles.imgContainer} onMouseEnter={()=>{dispatch(changeNukeHover())}} onMouseLeave={()=>{dispatch(changeNukeHover())}} onClick={()=>{dispatch(changeNukeHover())}}>
        { Boolean(!nukeHover) ? (<img src={logo} className={styles.imgContainer__logo} alt="Знак радиации." onClick={()=>{ dispatch(openMainPage())} } />) : (<img src={logoHovered} className={styles.imgContainer__logo} alt="Знак радиации." onClick={()=>{dispatch(openMainPage())}}/>) }
      </div>  
      <ul className={styles.header__nav}>
        <li className={styles.button} onClick={()=>{ dispatch(openDZonePage())}}>
          <div className={styles.button__text}>Напряженная&nbsp;зона</div>
        </li>
         <li className={styles.button} onClick={()=>{dispatch(openShelterPage())}}>
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
          <div className={styles.button__text} onClick={()=>{dispatch(openVolunteeringPage())}}>Волонтёрство</div>
        </li>
        <li className={styles.button} onClick={()=>{dispatch(openNewsPage())}}>
          <div className={styles.button__text}>Новости</div>
        </li> 
      </ul>
    </header>

  );
}