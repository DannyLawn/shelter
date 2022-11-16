import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openRulesPage } from '../../services/slices/app-navigation-slice';
import styles from './Footer.module.scss';
import rulesImage from '../../images/rules.png';
import rulesImageHover from '../../images/rules_hover.png';

export default function Footer() {

  const [onHoverButton, setOnHoverButton] = React.useState(false);
  const dispatch = useDispatch();
  const { rulesButton } = useSelector(store => store.appNavigation);

  const handleOnHover = () => {
    setOnHoverButton(!onHoverButton);
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__capture}>© 2022 Shelter, Inc. All Rights Reserved.</p>
      {rulesButton && (
        <button className={styles.footer__rulesButton} onMouseEnter={handleOnHover} onMouseLeave={handleOnHover} onClick={() => { dispatch(openRulesPage()) }}>
          {!onHoverButton ? (<img className={styles.footer__rulesButtonImage} src={rulesImage} alt="Правила." />) : (<img className={styles.footer__rulesButtonImage} src={rulesImageHover} alt="Правила." />)}
        </button>
      )}
    </footer>
  );
}