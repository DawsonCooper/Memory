import React from 'react';
import { Link } from 'react-router-dom'
import Scoreboard from './Scoreboard';
import '../styles/Header.css';
// Simply a header since scoreboard will be here we will need to pass state from another comp into props so we can pass to scoreboard

export default function Header (props){

    return(
        <div className='header'>
            <h2>Memory Game</h2>
            <Link to='/sort'>
                <li>Memory Sort</li>
            </Link>
            <Scoreboard score={props.score} personalBest={props.personalBest} />
        </div>
    )
}