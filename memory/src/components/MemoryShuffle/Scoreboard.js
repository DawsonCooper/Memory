import React, {useContext} from 'react';
import '../../styles/Scoreboard.css';
import {ScoreContext} from '../../App'
import { CardCountContext } from '../../App';
// This will be a scoreboard for current score/best score and max score we will need to track how many unique characters someone clicks 
// To track clicked possibly have a unique id for each card, each click we should check an array for that cards id and either end the game or add id to arr

export default function Scoreboard (props){
    // pass on to props some state that tracks your score and the session best should be passed in from the component with all the cards in them 
    const scoreContext = useContext(ScoreContext);
    const cardCountContext = useContext(CardCountContext);
    return(
        <div className='scoreboard'>
            <h4>Score: {scoreContext.scoreState}</h4> 
            <h4>Personal Best: {props.personalBest}</h4>
            <h4>Max: {cardCountContext.cardCountState}</h4>           
        </div>
    )
}