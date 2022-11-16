import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import DangerZone from '../DangerZone/DangerZone';
import News from '../News/News';
import Shelter from '../Shelter/Shelter';
import Volunteering from '../Volunteering/Volunteering';
import { useSelector } from "react-redux";
import styles from './App.module.scss';
import Rules from '../Rules/Rules';

function App() {
  const { mainPage, newsPage,
    shelterPage, dZonePage, volunteeringPage, rulesPage } = useSelector(store => store.appNavigation);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        {mainPage && (<Intro />)}
        {newsPage && (<News />)}
        {shelterPage && (<Shelter />)}
        {dZonePage && <DangerZone />}
        {volunteeringPage && <Volunteering />}
        {rulesPage && <Rules />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
