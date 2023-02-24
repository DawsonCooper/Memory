import React, { useState } from 'react';
import FinishModal from './FinishModal';
import LostModal from './LostModal';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../Menu/Menu';
import '../../styles/Menu/MenuContent.css';
export default function SortHeader(props) {
    const {newCards, ogOrder, shuffle} = props;
    const [winStatus, setWinStatus] = useState('off');
    const [lossStatus, setLossStatus] = useState('off');
    function checkwinStatus(){
        setWinStatus('win')
        console.log({newCards});
        console.log({ogOrder});
        newCards.forEach((card, index)=>{
            if (card.key !== ogOrder[index].key){
                setWinStatus("off")
                setLossStatus("lost")
            }
        })
        
        console.log(winStatus)
    }
    function closeModal(){
        setWinStatus('off')
        setLossStatus("off")
    }
    return(
        <div className='sort-header d-flex flex-column align-items-center mb-3'>
            <h2 className="memory-sort-header mb-2">Memory Sort</h2>
            <Menu />
            <div className='sort-btn-container text-center'>
                <button className="shuffle-cards cust-btn" onClick={(e) => shuffle(e)}>Start</button>
                <button className='submit-cards off cust-btn' data-toggle="modal" data-target="#exampleModalCenter" onClick={checkwinStatus}>Finished!</button>
            </div>
            <FinishModal restart={props.restart} closeModal={closeModal} status={winStatus}/>
            <LostModal restart={props.restart} closeModal={closeModal} status={lossStatus}/>
        </div>
    )
}