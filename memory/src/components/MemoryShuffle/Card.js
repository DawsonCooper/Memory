import React, { useState, useContext } from 'react';
import '../../styles/Card.css';
import Gameboard from './Gameboard';
import CardWrapper from './CardWrapper';
import {ScoreContext} from '../../App'
// This function will mostly exist as a compainer that we will nest characters inside and style accordingly

export default function Card(props){
    const [clicked, modClicked] = useState([]);
    const [personalBest, modBest] = useState(0);
    

    const scoreContext = useContext(ScoreContext);
    console.log(scoreContext)
    const itemClicked = (num) =>{
        
        
        if(!clicked.includes(num)){
            let tempArr = [...clicked]
            tempArr.push(num)
            modClicked(tempArr);
            scoreContext.scoreDispatch({type: 'right'});
        }else{
            modClicked([])
            if(scoreContext.scoreState > personalBest){
                modBest(scoreContext.scoreState);
            }
            scoreContext.scoreDispatch({type: 'wrong'});
        }
    }
    
    return(
    <>
        <Gameboard personalBest={personalBest} />
        <div>
        <CardWrapper best={personalBest} itemClicked={itemClicked} />
        </div>
    </>
    )
}