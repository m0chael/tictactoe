import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import "./styles/root.css";

const app = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXnext, setIsXNext] = useState(true);
    let current_message = "";
    let game_over = false;
    let continuing_player_message = "";

    const check_winner = () => {
        const winner = calculateWinner(board);
        let moves_remaining = false;

        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                current_message = `Current move is`;
                continuing_player_message = `${isXnext ? "X" : "O"}`;
                moves_remaining = true;
            }
        }

        game_over = !moves_remaining;

        if (winner && !game_over) {
            current_message = `${winner} has won!`;
            continuing_player_message = "";
            game_over = true;
        } else if (game_over) {
            current_message = `Game over, no winner!`;
            continuing_player_message = "";
        }

    };

    check_winner();

    const handle_square_click = (position_passed_on) => {
        if (game_over) { return; }

        setBoard((previous_value) => {

            if (previous_value[position_passed_on] == "X" || previous_value[position_passed_on] == "O") {
                return previous_value;
            }

            let new_array = [];
            for (var i = 0; i < previous_value.length; i++) {
                if (i == position_passed_on) {
                    new_array.push(isXnext ? "X" : "O");
                    setIsXNext(!isXnext);
                } else {
                    new_array.push(previous_value[i]);
                }
            }

            return new_array;
        });

    };

    return (
        <div className="app">
            <h1>Tic <span className="green">Tac</span> Toe </h1>
            <Board handle_square_click={handle_square_click} board={board} />
            <h2 className={current_message == "" ? "hide" : ""}>
                <span className="message">{current_message}</span>
                <span className="green">{continuing_player_message}</span>
            </h2>
        </div>
    );
};

export default app;
