import React from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game)

    const boardComponent = [];
    let blackCount = 0;
    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            if (boardState[i][j] === 'B') {
                ++blackCount;
            }
            boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} />))
        }
    }

    return (
        <div class="canvas">
            <div class="displayArea">
                <div class="count">
                    Count: {blackCount}
                </div>
                <div class="boardArea">
                    <div id="board">
                        {boardComponent}
                    </div>
                </div>
            </div>
        </div>
    )
}