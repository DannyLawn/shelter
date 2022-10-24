import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import DangerZone from '../DangerZone/DangerZone';
import News from '../News/News';
import Shelter from '../Shelter/Shelter';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.content}>
        <Intro />
        <News />
        <Shelter /> 
        <DangerZone />
      </main>
      <Footer />
    </div>
  );
}

export default App;
