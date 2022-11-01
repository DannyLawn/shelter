import React from "react";
import styles from './Footer.module.scss';
import rulesImage from '../../images/rules.png';
import rulesImageHover from '../../images/rules_hover.png';

export default function Footer({ rulesButtonState, openRulesPage }) {

  const [onHoverButton, setOnHoverButton] = React.useState(false);

  const handleOnHover = () => {
    setOnHoverButton(!onHoverButton);
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__capture}>© 2022 Shelter, Inc. All Rights Reserved.</p>
      {Boolean(rulesButtonState) && (
        <button className={styles.footer__rulesButton} onMouseEnter={handleOnHover} onMouseLeave={handleOnHover} onClick={openRulesPage}>
          {!onHoverButton ? (<img className={styles.footer__rulesButtonImage} src={rulesImage} alt="Правила." />) : (<img className={styles.footer__rulesButtonImage} src={rulesImageHover} alt="Правила." />)}
        </button>
      )}
    </footer>
  );
}