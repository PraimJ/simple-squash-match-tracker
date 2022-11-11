import React, { useState } from 'react';
import SquashGameForm from './components/squash-game-form/SquashGameForm';
import SquashGameListView from './components/squash-game-list-view/SquashGameListView';

import './App.css';

function App() {

  const [matchesData, setMatchesData] = useState([]);

  const handleOnMatchDataSubmitted = (newSubmittedMatchData) => {
    console.log('props on parent', newSubmittedMatchData);
    const newMatchesData = [...matchesData, newSubmittedMatchData];
    console.log(newMatchesData);
    setMatchesData(newMatchesData);
  }

  const headerTitle = 'Input Your Squash Match Scores';

  return (
    <div className="App">
      <header className="App-header">
        <h2>{headerTitle}</h2>
      </header>
      <div>
        <SquashGameForm onMatchDataSubmitted={handleOnMatchDataSubmitted} />
        <SquashGameListView matchesData={matchesData} />
      </div>
    </div>
  );
}

export default App;


/*
window.addEventListener(onMatchDataSubmitted, handleOnMatchDataSubmitted(newSubmittedMatchData) => {
  .... do shit with the args
});

*/
