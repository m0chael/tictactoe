import React from "react";

const Square = (props) => {
    

    return (
        <button type="button" className={props.value == "X"? "square is_x" : "square is_o"} onClick={props.square_click}>
            {props.value}
        </button>
    );
};

export default Square;