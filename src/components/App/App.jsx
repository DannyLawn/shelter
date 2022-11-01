import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import DangerZone from '../DangerZone/DangerZone';
import News from '../News/News';
import Shelter from '../Shelter/Shelter';
import Volunteering from '../Volunteering/Volunteering';
import styles from './App.module.scss';
import Rules from '../Rules/Rules';

function App() {

  const [newsState, setNewsState] = React.useState(false);
  const [shelterState, setShelterState] = React.useState(false);
  const [dZoneState, setDZoneState] = React.useState(false);
  const [mainIntroState, setMainIntroState ] = React.useState(true);
  const [volunteeringState, setVolunteeringState ] = React.useState(false);
  const [rulesButtonState, setRulesButtonState] = React.useState(true);
  const [rulesState, setRulesingState ] = React.useState(false);
 
  function openVolunteeringPage() {
    setVolunteeringState(true);
    setShelterState(false);
    setNewsState(false);
    setDZoneState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
    setRulesingState(false);
  }

  function openRulesPage() {
    setRulesingState(true);
    setVolunteeringState(false);
    setShelterState(false);
    setNewsState(false);
    setDZoneState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
  }

  function openNewsPage() {
    setNewsState(true);
    setShelterState(false);
    setDZoneState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
    setVolunteeringState(false);
    setRulesingState(false);
  }

  function openShelterPage() {
    setShelterState(true);
    setNewsState(false);
    setDZoneState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
    setVolunteeringState(false);
    setRulesingState(false);
  }

  function openDZonePage() {
    setDZoneState(true);
    setShelterState(false);
    setNewsState(false);
    setMainIntroState(false);
    setRulesButtonState(false);
    setVolunteeringState(false);
    setRulesingState(false);
  }

  function openMainIntro() {
    setMainIntroState(true);
    setRulesButtonState(true);
    setDZoneState(false);
    setShelterState(false);
    setNewsState(false);
    setVolunteeringState(false);
    setRulesingState(false);
  }


  return (
    <div className={styles.page}>
      <Header openNewsPage={openNewsPage} openShelterPage={openShelterPage} openDZonePage={openDZonePage} openMainIntro={openMainIntro} openVolunteeringPage={openVolunteeringPage} />
      <main className={styles.content}>
        {Boolean(mainIntroState) && (<Intro />)}
        {Boolean(newsState) && (<News />)}
        {Boolean(shelterState) && (<Shelter />)}
        {Boolean(dZoneState) && <DangerZone />}
        {Boolean(volunteeringState) && <Volunteering />}
        {Boolean(rulesState) && <Rules />}
        

      </main>
      <Footer rulesButtonState={rulesButtonState} openRulesPage={openRulesPage} />
    </div>
  );
}

export default App;
