import React from "react";
import styles from "./InDevelopment.module.scss";
import settingGif from "../../images/setting.gif";

export default function InDevelopment() {
  return(
    <section className={styles.inDevelopment}>
      <img src={settingGif} alt="Крутящаяся шестеренка." />
      <p className={styles.inDevelopment__capture}>разработка</p>
    </section>
  );
}
