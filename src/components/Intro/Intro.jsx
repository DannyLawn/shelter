import React from "react";
import styles from './Intro.module.scss';

export default function Intro() {

  return(
    <section className={styles.intro}>
      <p className={styles.intro__text}>В наши дни, когда ситуация не спокойная, лучше и не думать о плохом. Но&nbsp;что&nbsp;делать, если внезапно услышите рёв сирен, которые окажутся не учебными? Главным станет реакция, а так же выбор надежного укрытия.</p>
      <p className={styles.intro__text}>На ресурсе можно встретить актуальную карту потенциально опасных участков и расположение ближайших убежищ. Кроме этого, присутвует раздел волонтерства, в котором будут обрабатываться тикеты попавших в сложную ситуацию. И актуальные новости, касающиеся граждан.</p>
      <p className={styles.intro__text}><span className={styles.textAccent}>Shelter</span> сбережет вашу задницу! Следите за последними новостями, берегите&nbsp;близких и&nbsp;оставайтесь&nbsp;в&nbsp;безопасности.</p>
    </section>
  );
}