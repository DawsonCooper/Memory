import React, { useState, useEffect } from 'react';
import Character from './Character';
import '../styles/Card.css';
import Axios from 'axios';

export default function CardWrapper(props){
    let cardsBaseCase = [{
        capital: "",
        name: "",
        key: "1",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "2",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "3",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "4",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "5",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "6",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "7",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "8",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "9",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "10",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "11",
        flag: "",
        punc: ''
    },
    {
        capital: "",
        name: "",
        key: "12",
        flag: "",
        punc: ''
    }]

    const {score, best, itemClicked} = props
    
    const [cards, modCards] = useState(cardsBaseCase)
    let cardArray = [];
    
    let tempArr = [];
    let tempCountry = [] 
    const getCountries = () => {
        modCards(cardsBaseCase)
        tempCountry = []
        Axios.get("https://countriesnow.space/api/v0.1/countries/flag/images").then(
            (response) => {
                if (response.status === 200){
                     
                    // Get countries name and thier flags
                    for(let i = 0; i < 12; i++){
                        let random = Math.floor(Math.random() * response.data.data.length)
                        if (!tempArr.includes(random)){
                            tempArr.push(random);
                        }

                    }
                    for(let i = 0; i < tempArr.length; i++){
                        tempCountry.push(response.data.data[tempArr[i]]);
                        tempCountry[i].key = i;
                        Axios.post('https://countriesnow.space/api/v0.1/countries/capital', {
                            "country": tempCountry[i].name
                        }).then(response => {
                            response.data.data.capital ? tempCountry[i].capital = response.data.data.capital :  tempCountry[i].capital = "No defined capital";
                            tempCountry[i].punc = ","
                        })
                    }
                    // GET EXISTING COUNTRYS CAPITALS AND ADD TO COUNTRY ARR


                            
                }
                setTimeout(() => {
                    cardArray = tempCountry
                    modCards(tempCountry)
                }, 500)
                 
            })           
    }
    
    
    useEffect(() => {
        console.log('useEffect')
        
        if(cardArray !== undefined){
            let arr=[...cards];
            let currentIndex = arr.length,  randomIndex;

            while (currentIndex !== 0) {
            
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                // And swap it with the current element.
                [arr[currentIndex], arr[randomIndex]] = [
                  arr[randomIndex], arr[currentIndex]];
            }
            modCards(arr)
        }
        console.log('------------------------------')
    },[score, best])
    
    return (
        <>
        <button onClick={getCountries} className='gen-btn'>Generate countries</button>
        <section className='cards-wrapper'>
            
            {cards.map((card) =>(
                <div className='card' key={card.key} onClick={() => {itemClicked(card.key)}}>
                        <Character  key={card.key} image={ card.flag } alternative={`${card.capital}${card.punc} ${card.name}`} charHead={`${card.capital}${card.punc} ${card.name}`} />
                </div>
                )
            )}
        </section>
        </>
    )
}