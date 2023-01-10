import React, { useState, useEffect } from 'react';
import Square from './Square';
import { Pattern } from './Pattern';
import Header from './Header';
import Footer from './Footer';
function App() {
    /* Step 1: Create board for tic tac toe game.
   Step 2: Create rows in the board
   Step 3: Create square in the rows. 
           ->Square consists of a value to be displayed and a function which gets triggered onClick. 
   Step 4: Create function for displaying the value when we click a box
   Step 5: Import Winning Pattern array. Then create function to check winner
   Step 6: Whenever board gets changed, check for winner. Use `useEffect` for this. Also check for a tie.
           */
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);/* array which stores the value displayed on box. INitially all values are null */
    const [symbol, setSymbol] = useState("X");/* Used for storing the recent value to be displayed on box */
    const [state, setState] = useState({ winner: "", msg: "" });
    function chooseval(index) {/* function for displaying value on box when clicked */
        setBoard(board.map((val, idx) => {
            if (idx == index && val == "") { return symbol; }
            else { return val; }
        }));
        if (symbol == "X") { setSymbol("O"); }
        else { setSymbol("X"); }
    }
    useEffect(() => {/* using useEffect hook to check for below conditions whenever board gets changed */
        checkTie();/* function checking for tie */
        checkWinner();/* function checking for winner */
    }, [board])
    useEffect(() => {/* using useEffect for displaying message */
        if (state.winner != "")
            alert(`Game finished and the winnning player is ${state.winner}`);
        setBoard(["", "", "", "", "", "", "", "", ""]);/* Restart the Game */
    }, [state])

    const date = new Date().getFullYear;

    function checkWinner() {
        Pattern.map((winPattern) => {
            const firstPlayer = board[winPattern[0]];
            if (firstPlayer == "") return;
            let win = true;/* We assume winner */
            winPattern.map((checkWin) => {
                if (board[checkWin] != firstPlayer)/* if winner not found, change 'win to false' */
                    win = false;
            })
            if (win == true) {
                setState({ winner: firstPlayer, msg: "WON" });
            }
        })
    }

    function checkTie() {
        let tie = true;
        board.map((Square) => {
            if (Square == "") {
                tie = false;
            }
        })
        if (tie == true) {
            setState({ winner: "No One", msg: "TIE" });
        }
    }
    /* Creating the Tic Tac Toe board to play on */
    return <div >
        <Header />
        <div className="app">
            <div className='board'>
                <div className='row'>
                    <Square val={board[0]} chooseval={() => chooseval(0)} />
                    <Square val={board[1]} chooseval={() => chooseval(1)} />
                    <Square val={board[2]} chooseval={() => chooseval(2)} />
                </div>
                <div className='row'>
                    <Square val={board[3]} chooseval={() => chooseval(3)} />
                    <Square val={board[4]} chooseval={() => chooseval(4)} />
                    <Square val={board[5]} chooseval={() => chooseval(5)} /></div>
                <div className='row'>
                    <Square val={board[6]} chooseval={() => chooseval(6)} />
                    <Square val={board[7]} chooseval={() => chooseval(7)} />
                    <Square val={board[8]} chooseval={() => chooseval(8)} /></div>
            </div>
        </div>

        <Footer />
    </div>
}

export default App;
