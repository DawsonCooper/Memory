import Header from'./Header';

import React from 'react';
export default function Gameboard(props){
    return (
    <div className="gameboard">
        <Header score={props.score} personalBest={props.personalBest} />
    </div>
    )
}