import React from "react";
import styles from "./Volunteering.module.scss";

export default function Volunteering() {
  return(
    <section className={styles.volunteering}>
      <h2 className={styles.volunteering__title}>Волонтерство</h2>
      <p className={styles.volunteering__description}>тут описание раздела<div className=""></div></p>
      <div className={styles.volunteering__container}>
        <h2 className={styles.volunteering__subtitle}>Заявки:</h2>
        <ul className={styles.volunteering__list}>
          <li className={styles.volunteering__listItem}>
            <h2 className={styles.volunteering__requestTitle}>
              заголовок заявки
            </h2>
            <p className={styles.volunteering__requestDescription}>
              описание заявки
            </p>
            <div className={styles.volunteering__requestStatus}>
              <p className={styles.volunteering__requestStatusText}>Cтатус:</p>
              <img src="" alt="" />
            </div>
          </li>
        </ul>

      </div>
    </section>
  );
}