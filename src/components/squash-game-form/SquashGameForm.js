import React, { useState } from 'react';


function SquashGameForm(props) {

    const [enteredPlayerOne, setEnteredPlayerOne] = useState('');
    const [enteredPlayerTwo, setEnteredPlayerTwo] = useState('');
    const [enteredScore, setEnteredScore] = useState('');
    const [enteredWinner, setEnteredWinner] = useState('');

    const playerOneValueHandler = (event) => {
        setEnteredPlayerOne(event.target.value);
    }

    const playerTwoValueHandler = (event) => {
        setEnteredPlayerTwo(event.target.value);
    }

    const scoreValueHandler = (event) => {
        setEnteredScore(event.target.value);
    }

    const winnerValueHandler = (event) => {
        setEnteredWinner(event.target.value);
    }

    const clearForm = () => {
        setEnteredPlayerOne('');
        setEnteredPlayerTwo('');
        setEnteredScore('');
        setEnteredWinner('');
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('event submitted', event);
        const newSubmittedMatchData = {
            playerOne: enteredPlayerOne,
            playerTwo: enteredPlayerTwo,
            score: enteredScore,
            winner: enteredWinner,
            id: Math.random().toString()
        };
        console.log('obj on child', newSubmittedMatchData);
        props.onMatchDataSubmitted(newSubmittedMatchData);
        clearForm();
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Player 1:</label>
                <input type="text" placeholder="Enter Player 1" value={enteredPlayerOne} onChange={playerOneValueHandler} />
            </div>
            <div>
                <label>Player 2:</label>
                <input type="text" placeholder="Enter Player 2" value={enteredPlayerTwo} onChange={playerTwoValueHandler} />
            </div>
            <div>
                <label>Score:</label>
                <input type="text" placeholder="Enter Score" value={enteredScore} onChange={scoreValueHandler} />
            </div>
            <div>
                <label>Winner:</label>
                <input type="text" placeholder="Enter Winner" value={enteredWinner} onChange={winnerValueHandler} />
            </div>
            <div>
                <button type="submit">SUBMIT MATCH</button>
            </div>
        </form>
    );
}

export default SquashGameForm;
