import React, { useState } from 'react';
import Character from './Character';
import '../styles/Card.css';
import Gameboard from './Gameboard';
// This function will mostly exist as a compainer that we will nest characters inside and style accordingly

export default function Card(props){
    const [clicked, modClicked] = useState([]);
    const [score, modScore] = useState(0)
    const [personalBest, modBest] = useState(0)
    const itemClicked = (num) =>{
        console.log(clicked)
        let tempClicked = [...clicked]
        console.log(tempClicked)
        if(!tempClicked.includes(num)){
            modClicked(clicked.concat(num));
            let tempScore = score + 1
            modScore(tempScore);
            
            console.log(score)
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
        <div className='cards-wrapper'>
            
            <div onClick={() => {itemClicked(1)}} className='card'>
                <Character  id='1' image={require('../media/japan.jpg')} alternative='Tokyo' charHead='Tokyo, Japan'/>
            </div>
            <div onClick={() => {itemClicked(2)}} className='card'>
                <Character id='2' image={require('../media/czech.jpg')} alternative='Prague' charHead='Prague, Czech'/>
            </div>
            <div onClick={() => {itemClicked(3)}} className='card'>
                <Character id='3' image={require('../media/france.jpg')} alternative='Paris' charHead='Paris, France'/>
            </div>
            <div onClick={() => {itemClicked(4)}} className='card'>
                <Character id='4' image={require('../media/italy.jpg')} alternative='Rome' charHead='Rome, Italy'/>
            </div>
            <div onClick={() => {itemClicked(5)}} className='card'>
                <Character id='5' image={require('../media/newzealand.jpg')} alternative='Wellington' charHead='Wellington, New Zealand'/>
            </div>
            <div onClick={() => {itemClicked(6)}} className='card'>
                <Character id='6' image={require('../media/norway.jpg')} alternative='Oslo' charHead='Oslo, Norway'/>
            </div>
            <div onClick={() => {itemClicked(7)}} className='card'>
                <Character id='7' image={require('../media/poland.jpg')} alternative='Warsaw' charHead='Warsaw, Poland'/>
            </div>
            <div onClick={() => {itemClicked(8)}} className='card'>
                <Character id='8' image={require('../media/spain.jpg')} alternative='Madrid' charHead='Madrid, Spain'/>
            </div>
            <div onClick={() => {itemClicked(9)}} className='card'>
                <Character id='9' image={require('../media/sweeden.jpg')} alternative='Stockholm' charHead='Stockholm, Sweeden'/>
            </div>
            <div onClick={() => {itemClicked(10)}} className='card'>
                <Character id='10' image={require('../media/switzerland.jpg')} alternative='Bern' charHead='Bern, Switzerland'/>
            </div>
            <div onClick={() => {itemClicked(11)}} className='card'>
                <Character id='11' image={require('../media/ukraine.jpg')} alternative='Kiev' charHead='Kiev, Ukraine'/>
            </div>
            <div onClick={() => {itemClicked(12)}} className='card'>
                <Character id='12' image={require('../media/UnitedKingdom.jpg')} alternative='London' charHead='London, United Kingdom'/>
            </div> 
        </div>
        </>
    )
}