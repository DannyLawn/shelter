import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import DangerZone from '../DangerZone/DangerZone';
import News from '../News/News';
import Shelter from '../Shelter/Shelter';
import styles from './App.module.scss';

function App() {

  const [newsState, setNewsState] = React.useState(false);
  const [shelterState, setShelterState] = React.useState(false);
  const [dZoneState, setDZoneState] = React.useState(false);
  const [mainIntroState, setMainIntroState ] = React.useState(true);
  const [rulesButtonState, setRulesButtonState] = React.useState(true);
 

  function handleNewsPage() {
    setNewsState(true);
    setShelterState(false);
    setDZoneState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
  }

  function handleShelterPage() {
    setShelterState(true);
    setNewsState(false);
    setDZoneState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
  }

  function handleDZonePage() {
    setDZoneState(true);
    setShelterState(false);
    setNewsState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
  }

  function openMainIntro() {
    setMainIntroState(true);
    setRulesButtonState(true);
    setDZoneState(false);
    setShelterState(false);
    setNewsState(false);
  }


  return (
    <div className={styles.page}>
      <Header handleNewsPage={handleNewsPage} handleShelterPage={handleShelterPage} handleDZonePage={handleDZonePage} openMainIntro={openMainIntro} />
      <main className={styles.content}>
        {Boolean(mainIntroState) && (<Intro />)}
        {Boolean(newsState) && (<News />)}
        {Boolean(shelterState) && (<Shelter />)}
        {Boolean(dZoneState) && <DangerZone />}
      </main>
      <Footer rulesButtonState={rulesButtonState} />
    </div>
  );
}

export default App;
