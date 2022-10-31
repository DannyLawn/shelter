import React from "react";
import combatReadinessMap from '../../images/combatReadinessMap.jpg';
import tiredHeadGif from '../../images/tiredHead.gif';
import styles from "./DangerZone.module.scss";

export default function DangerZone() {

  return (
    <section className={styles.dangerZone}>
      <h2 className={styles.dangerZone__title}>Напряженная зона</h2>
      <p className={styles.dangerZone__capture}>Карта особых правовых режимов, которые вводит Президент при нынешней агрессии и непосредственной угрозe. <span className={styles.dangerZone__captureAccent}>(19 октября 2022)</span></p> 
      <img className={styles.dangerZone__map} src={combatReadinessMap} alt="Карта военного положения." />
      <img src={tiredHeadGif} alt="Следящая голова." className={styles.dangerZone__head} />
    </section>
  );
}