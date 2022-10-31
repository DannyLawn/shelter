import React from "react";
import shelterImg from "../../images/shelterIMG.png";
import styles from "./Shelter.module.scss";

export default function Shelter() {

  return (
    <section className={styles.shelter}>
      <h2 className={styles.shelter__title}>Укрытие</h2>
      <img className={styles.shelter__image} src={shelterImg} alt="Бункер." />
      <p className={styles.shelter__text}>Сохраняйте спокойствие, все будет в полном ажуре. В то же время, при экстренной ситуации, лучше полагаться не только на случай. Списки укрытий будут пополняться модерацией по мере необходимости. Данные проверяется вручную. Статусы свободных мест обновляются.</p> 
        <p className={styles.shelter__capture}>Выберите город</p>
        <select className={styles.shelter__select} name="choice">
          <option className={styles.shelter__selectOption} value="first">Херсон</option>
          <option className={styles.shelter__selectOption} value="second">Донецк</option>
          <option className={styles.shelter__selectOption} value="second">Луганск</option>
        </select>
     
    </section>
  );
}