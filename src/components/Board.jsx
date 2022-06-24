import React from 'react';
import Square from './Square';

const Board = (props) => {

    const render_square = (position) => {
        return <Square value={props.board[position]} square_click={()=>{ props.handle_square_click(position); }}/>
    };

    return (
        <div className="board">
            <div className="board-row">
                { render_square(0) }
                { render_square(1) }
                { render_square(2) }
            </div>
            <div className="board-row">
                { render_square(3) }
                { render_square(4) }
                { render_square(5) }
            </div>
            <div className="board-row">
                { render_square(6) }
                { render_square(7) }
                { render_square(8) }
            </div>
        </div>
    );
};

export default Board;