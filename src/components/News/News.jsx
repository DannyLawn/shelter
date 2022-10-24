import React from "react";
import {newsList} from "../../ulils/data";
import styles from "./News.module.scss";

export default function News() {

  const newsCount = newsList.length - 1;
  const [news, setNews] = React.useState({active: 0});
  const [activeNextBtn, setActiveNextBtn] = React.useState(true);
  const [activePrevBtn, setActiveprevBtn] = React.useState(false);

  const handleNextNews = () => {
    if (news.active < newsCount) {
      setNews({active: news.active + 1})
      setActiveprevBtn(true);
    } else {
      setActiveNextBtn(false);
    }
  }

  const handlePrevNews = () => {
    if (news.active > 0) {
      setNews({active: news.active - 1})
      setActiveNextBtn(true);
    } else {
      setNews({active: 0})
      setActiveprevBtn(false);
    }
  }

  return (
    <section className={styles.news}>
      <h2 className={styles.news__sectionTitle}>Новости</h2>
      <p className={styles.news__captureCount}>{`${news.active + 1} / ${newsCount + 1}`}</p>
      <ul className={styles.news__container}>
      {activePrevBtn?(<button className={`${styles.news__button} ${styles.news__button_hover}`} onClick={handlePrevNews}/>):(<button className={`${styles.news__button} ${styles.news__button_disable}`} disabled/>)}
        <li className={styles.news__item}>
          <h2 className={styles.news__title}>{newsList[news.active].title}</h2>
          <p className={styles.news__text}>{newsList[news.active].text}</p>
        </li>
        {activeNextBtn?(<button className={`${styles.news__button} ${styles.news__button_next} ${styles.news__button_hover}`} onClick={handleNextNews}/>):(<button className={`${styles.news__button} ${styles.news__button_next} ${styles.news__button_disable}`} disabled/>)}
      </ul>
    </section>
  );
}