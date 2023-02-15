import React, { useState, useEffect } from 'react';
import Character from './Character';
import '../styles/Card.css';

export default function CardWrapper(props){
    const {score, best, itemClicked} = props
    let cardArray =[
        {
            key: '1',
            image: require('../media/japan.jpg'),
            alt: 'Tokyo',
            charHead: 'Tokyo, Japan'
        },
        {
            key: '2',
            image: require('../media/czech.jpg'),
            alt: 'Prague',
            charHead: 'Prague, Czech'
        },
        {
            key: '3',
            image: require('../media/france.jpg'),
            alt: 'Paris',
            charHead: 'Paris, France'
        },
        {
            key: '4',
            image: require('../media/italy.jpg'),
            alt: 'Rome',
            charHead: 'Rome, Italy'
        },
        {
            key: '5',
            image: require('../media/newzealand.jpg'),
            alt: 'Wellington',
            charHead: 'Wellington, New Zealand'
        },
        {
            key: '6',
            image: require('../media/norway.jpg'),
            alt: 'Oslo',
            charHead: 'Oslo, Norway'
        },
        {
            key: '7',
            image: require('../media/poland.jpg'),
            alt: 'Warsaw',
            charHead: 'Warsaw, Poland'
        },
        {
            key: '8',
            image: require('../media/spain.jpg'),
            alt: 'Madrid',
            charHead: 'Madrid, Spain'
        },
        {
            key: '9',
            image: require('../media/sweeden.jpg'),
            alt: 'Stockholm',
            charHead: 'Stockholm, Sweeden'
        },
        {
            key: '10',
            image: require('../media/switzerland.jpg'),
            alt: 'Bern',
            charHead: 'Bern, Switzerland'
        },
        {
            key: '11',
            image: require('../media/ukraine.jpg'),
            alt: 'Kiev',
            charHead: 'Kiev, Ukraine'
        },
        {
            key: '12',
            image: require('../media/UnitedKingdom.jpg'),
            alt: 'London',
            charHead: 'London, United Kingdom'
        }
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
            {cards.map((card) =>(
                <div className='card'>
                        <Character onClick={() => {itemClicked(card.key)}} key={card.key} image={ card.image } alternative={card.alt} charHead={card.charHead} />
                </div>
                )
            )}
        </section>
    )
}