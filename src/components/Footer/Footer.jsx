import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openRulesPage, changeRulesHover } from '../../services/slices/app-navigation-slice';
import styles from './Footer.module.scss';
import rulesImage from '../../images/rules.png';
import rulesImageHover from '../../images/rules_hover.png';

export default function Footer() {

  const dispatch = useDispatch();
  const { rulesButton, rulesHover } = useSelector(store => store.appNavigation);


  return (
    <footer className={styles.footer}>
      <p className={styles.footer__capture}>© 2022 Shelter, Inc. All Rights Reserved.</p>
      {rulesButton && (
        <button className={styles.footer__rulesButton} onMouseEnter={()=>{dispatch(changeRulesHover())}} onMouseLeave={()=>{dispatch(changeRulesHover())}} onClick={() => { dispatch(openRulesPage()) }}>
          {!rulesHover ? (<img className={styles.footer__rulesButtonImage} src={rulesImage} alt="Правила." />) : (<img className={styles.footer__rulesButtonImage} src={rulesImageHover} alt="Правила." />)}
        </button>
      )}
    </footer>
  );
}