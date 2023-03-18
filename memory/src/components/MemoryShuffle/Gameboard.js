import Header from'./Header';

import React from 'react';
export default function Gameboard(props){
    
    return (
    <div className="gameboard">
        <Header personalBest={props.personalBest} />
    </div>
    )
}