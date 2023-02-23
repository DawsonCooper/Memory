import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../styles/MemorySortStyles/sort.css';
import SortChar from "./SortCharacter";
import { DragDropContext, Droppable , Draggable } from 'react-beautiful-dnd'
import SortHeader from "./SortHeader";
export default function MemorySortComponent(props) {
    const [cards, setCards] = useState([{}]);
    const [ogOrder, setOgOrder] = useState([]);
    const [newCards, setNewCards] = useState([{}]);
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
    }];
    let tempArr = [];
    let tempCountry = [];
    useEffect(() => {
        console.log('Mount')
        getCountries()
        console.log('------------------------------')
    },[])
    function getCapitals(i) {
        Axios.post('https://countriesnow.space/api/v0.1/countries/capital', {
                "country": tempCountry[i].name
            }).then(response => {
                response.data.data.capital ? tempCountry[i].capital = response.data.data.capital :  tempCountry[i].capital = "None";
                tempCountry[i].punc = ","
                if (i === tempArr.length - 1){
                    setTimeout(() => {
                        console.log(tempCountry)
                        setCards(tempCountry)
                    }, 100)
                    
                }
            }).catch(error => {console.log(error)});
    }
    const getCountries = () => {
        setCards(cardsBaseCase)
        Axios.get("https://countriesnow.space/api/v0.1/countries/flag/images").then(
            (response) => {
                if (response.status === 200){
                    tempArr = [];
                    // Get countries name and thier flags
                    for(let i = 0; i < 8; i++){
                        let random = Math.floor(Math.random() * response.data.data.length)
                        if (!tempArr.includes(random)){
                            tempArr.push(random);
                        }
                        
                    }
                    console.log(tempArr)
                    tempCountry = [];
                    for(let i = 0; i < tempArr.length; i++){
                        tempCountry.push(response.data.data[tempArr[i]]);
                        tempCountry[i].key = i;
                        getCapitals(i)
                    }
                }                
            })
            console.log('------------------------------')           
    }

    function shuffle(e) {
        
        e.target.nextSibling.classList.remove('off')
        e.target.classList.add('off')
        setOgOrder(cards);
        if(cards !== undefined){
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
                setCards(arr);
                
        }
    }
    function handleOnDragEnd(result){
        console.log(result);
        if (!result.destination) return;

        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCards(items)
        setNewCards(items)
    }

    return (
        <div className="memory-sort-container">
            <div className={'memory-sort-header'} >
            <SortHeader restart={getCountries} shuffle={shuffle} newCards={newCards} ogOrder={ogOrder} />
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='grid-cell-sort'>
                    {(provided) => 
                    (
                        
                            <ul {...provided.droppableProps} ref={provided.innerRef} className='grid-sort' >
                            {cards.map((card, index) => {
                                return(
                                    <Draggable key={card.key} draggableId={`${card.key}`} index={index}>
                                        {(provided) => (
                                            <div className='grid-cell-sort' key={card.key + 1} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <SortChar  key={card.key + 2} image={ card.flag } alternative={`${card.capital}${card.punc} ${card.name}`} charHead={`${card.capital}${card.punc} ${card.name}`} />
                                            </div> 
                                        )}
                                         
                                    </Draggable>
                                )
                                
                                }
                            )}
                            {provided.placeholder}
                            </ul>
                    )
                }
                    
                </Droppable>
            </DragDropContext>

        </div>
    )
}