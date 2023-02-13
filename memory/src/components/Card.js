import React, { useState } from 'react';
import '../styles/Card.css';
import Gameboard from './Gameboard';
import CardWrapper from './CardWrapper';
// This function will mostly exist as a compainer that we will nest characters inside and style accordingly

export default function Card(props){
    const [clicked, modClicked] = useState([]);
    const [score, modScore] = useState(0)
    const [personalBest, modBest] = useState(0);
    
    const itemClicked = (num) =>{
        
        
        if(!clicked.includes(num)){
            let tempArr = [...clicked]
            tempArr.push(num)
            modClicked(tempArr);
            modScore(score + 1);
        }else{
            modClicked([])
            if(score > personalBest){
                modBest(score);
            }
            modScore(0)
        }
    }
    
    return(
    <>
        <Gameboard score={score} personalBest={personalBest} />
        <div>
        <CardWrapper score={score} best={personalBest} itemClicked={itemClicked}/>
        </div>
    </>
    )
}