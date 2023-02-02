import React from 'react';
import './SquashGameListView.css';


function SquashGameListView(props) {

    console.log(props);

    if (!props.matchesData.length) {
        return (
            <div className="list-container">
                Sorry, no matches to display
            </div>
        );
    }

    return (
        <div className="list-container">
            <h2>MATCHES</h2>
            <ul className="list">
                {props.matchesData.map((matchData) => {
                    return (<li key={matchData.id} className="list-item">
                        <div><b>Player 1: </b>{matchData.playerOne}</div>
                        <div><b>Player 2: </b>{matchData.playerTwo}</div>
                        <div><b>Score: </b>{matchData.score}</div>
                        <div><b>Winner: </b>{matchData.winner}</div>
                    </li>)
                })}
            </ul>
        </div>
    );
}

export default SquashGameListView;
