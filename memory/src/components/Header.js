import React from 'react';

import Scoreboard from './Scoreboard';
import '../styles/Header.css';
import Menu from './Menu/Menu'
// Simply a header since scoreboard will be here we will need to pass state from another comp into props so we can pass to scoreboard

export default function Header (props){

    return(
        <div className='header'>
            <div className='top-row'>
                <h2 >Memory Game</h2>
                <div className='menu-button'><Menu /></div>
            </div>
            <Scoreboard score={props.score} personalBest={props.personalBest} />
        </div>
    )
}