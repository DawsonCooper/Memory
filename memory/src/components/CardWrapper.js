import React, { useState, useEffect } from 'react';
import Character from './Character';
import '../styles/Card.css';

export default function CardWrapper(props){
    const {score, best, itemClicked} = props
    let cardArray =[
        [(<div key='1' onClick={() => {itemClicked(1)}} className='card'>
            <Character  key='1' image={require('../media/japan.jpg')} alternative='Tokyo' charHead='Tokyo, Japan'/>
        </div>)],
        [(<div key='2' onClick={() => {itemClicked(2)}} className='card'>
            <Character key='2' image={require('../media/czech.jpg')} alternative='Prague' charHead='Prague, Czech'/>
        </div>)],
        [(<div key='3' onClick={() => {itemClicked(3)}} className='card'>
            <Character key='3' image={require('../media/france.jpg')} alternative='Paris' charHead='Paris, France'/>
        </div>)],
        [(<div key='4' onClick={() => {itemClicked(4)}} className='card'>
            <Character key='4' image={require('../media/italy.jpg')} alternative='Rome' charHead='Rome, Italy'/>
        </div>)],
        [(<div key='5' onClick={() => {itemClicked(5)}} className='card'>
            <Character key='5' image={require('../media/newzealand.jpg')} alternative='Wellington' charHead='Wellington, New Zealand'/>
        </div>)],
        [(<div key='6' onClick={() => {itemClicked(6)}} className='card'>
            <Character key='6' image={require('../media/norway.jpg')} alternative='Oslo' charHead='Oslo, Norway'/>
        </div>)],
        [(<div key='7' onClick={() => {itemClicked(7)}} className='card'>
            <Character key='7' image={require('../media/poland.jpg')} alternative='Warsaw' charHead='Warsaw, Poland'/>
        </div>)],
        [(<div key='8' onClick={() => {itemClicked(8)}} className='card'>
            <Character key='8' image={require('../media/spain.jpg')} alternative='Madrid' charHead='Madrid, Spain'/>
        </div>)],
        [(<div key='9' onClick={() => {itemClicked(9)}} className='card'>
            <Character key='9' image={require('../media/sweeden.jpg')} alternative='Stockholm' charHead='Stockholm, Sweeden'/>
        </div>)],
        [(<div key='10' onClick={() => {itemClicked(10)}} className='card'>
            <Character key='10' image={require('../media/switzerland.jpg')} alternative='Bern' charHead='Bern, Switzerland'/>
        </div>)],
        [(<div key='11' onClick={() => {itemClicked(11)}} className='card'>
            <Character key='11' image={require('../media/ukraine.jpg')} alternative='Kiev' charHead='Kiev, Ukraine'/>
        </div>)],
        [(<div key='12' onClick={() => {itemClicked(12)}} className='card'>
            <Character key='12' image={require('../media/UnitedKingdom.jpg')} alternative='London' charHead='London, United Kingdom'/>
        </div>)] 
    ];
    const [cards, modCards] = useState([])
    useEffect(() => {
        console.log('useEffect')
        let arr=[...cardArray];
        let currentIndex = arr.length,  randomIndex;

        while (currentIndex !== 0) {
      
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [
              arr[randomIndex], arr[currentIndex]];
          }
        console.log('newArr',arr)
        modCards(arr)
        console.log('cardArr', cardArray)
        console.log('--------------------------------------')
    },[score, best])

    return (
        <section className='cards-wrapper'>
            {cards}
        </section>
    )
}