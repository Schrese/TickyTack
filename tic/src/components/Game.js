import React, { useState } from 'react';

import Board from './Board.js';
import {calculateWinner} from '../helpers.js';


const styles = {
    width: '1000px',
    margin: '2px auto'
}

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);// changed to be an array of arrays
    const [stepNumber, setStepNumber] = useState(0); //this is the state we're on in the array above
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]); //changed to the most recent step


    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber]
        const squares = [...current];
        // if the user clicks an occupied square or if game is won, we just return
        if (winner || squares[i]) return;
        // put an X or an 0 in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0) // if this is 0, it sets it to true, otherwise it sets it to false
    };

    
    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start'; //renders out buttons where we jump back and forth in time

            return (
                <li key={move}>
                    <button onClick = {() => jumpTo(move)}>{destination}</button>
                </li>
                
            )
        })
        
    )

    return(
        <>
            <Board squares = {history[stepNumber]} onClick = {handleClick} />
            <div style = {styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 0)}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;



// GAME THAT WORKS WITHOUT TIME TRAVEL
// const Game = () => {

//     const [board, setBoard] = useState(Array(9).fill(null));
//     const [xIsNext, setXisNext] = useState(true);
//     const winner = calculateWinner(board);


//     const handleClick = i => {
//         const boardCopy = [...board];
//         // if the user clicks an occupied square or if game is won, we just return
//         if (winner || boardCopy[i]) return;
//         // put an X or an 0 in the clicked square
//         boardCopy[i] = xIsNext ? 'X' : 'O';
//         setBoard(boardCopy);
//         setXisNext(!xIsNext);


//     }

//     const jumpTo = () => {

//     }


//     const renderMoves = () => {
//         return <button onClick = {() => setBoard(Array(9).fill(null))}>Start Game</button>
//     }

//     return(
//         <>
//             <Board squares = {board} onClick = {handleClick} />
//             <div style = {styles}>
//                 <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 0)}</p>
//                 {renderMoves()}
//             </div>
//         </>
//     )
// }

// export default Game;
