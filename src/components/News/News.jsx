import React from "react";
import {newsList} from "../../ulils/data";
import styles from "./News.module.scss";

export default function News() {

  const newsCount = newsList.length - 1;
  const [news, setNews] = React.useState({active: 0});
  
  const handleNextNews = () => {
    if (news.active < newsCount) {
      setNews({active: news.active + 1})
    } 
  } 

  const handlePrevNews = () => {
    if (news.active > 0) {
      setNews({active: news.active - 1})
    }
  }

  return (
    <section className={styles.news}>
      <h2 className={styles.news__sectionTitle}>Новости</h2>
      <p className={styles.news__captureCount}>{`${news.active + 1} / ${newsCount + 1}`}</p>
      <ul className={styles.news__container}>
      {news.active!==0?(<button className={`${styles.news__button} ${styles.news__button_hover}`} onClick={handlePrevNews}/>):(<button className={`${styles.news__button} ${styles.news__button_disable}`} disabled/>)}
        <li className={styles.news__item}>
          <h2 className={styles.news__title}>{newsList[news.active].title}</h2>
          <p className={styles.news__text}>{newsList[news.active].text}</p>
        </li>
        {news.active!==newsCount?(<button className={`${styles.news__button} ${styles.news__button_next} ${styles.news__button_hover}`} onClick={handleNextNews}/>):(<button className={`${styles.news__button} ${styles.news__button_next} ${styles.news__button_disable}`} disabled/>)}
      </ul>
    </section>
  );
}