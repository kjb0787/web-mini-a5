import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;

    let backgroundColor = 'whiteBackground';
    if (symbol === 'W') {
        backgroundColor = 'whiteBackground';
    } else if (symbol === 'B') {
        backgroundColor = 'blackBackground';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        }
    )} id="square" class={backgroundColor}>
    </div>);
}