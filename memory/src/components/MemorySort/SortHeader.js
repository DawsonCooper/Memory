import React, { useState } from 'react';
import FinishModal from './FinishModal';
import LostModal from './LostModal';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../Menu/Menu';
import '../../styles/Menu/MenuContent.css';
import InfoModal from './InfoModal'
export default function SortHeader(props) {
    const {newCards, ogOrder, shuffle} = props;
    const [winStatus, setWinStatus] = useState('off');
    const [lossStatus, setLossStatus] = useState('off');
    const [info, setInfo] = useState();
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
        setWinStatus('off');
        setLossStatus("off");
        document.querySelector('.submit-cards').classList.add('off');
        document.querySelector('.shuffle-cards').classList.remove('off');
        
    }
    const clickInfo = () => {
        setInfo(!info);
        console.log('called clickInfo')
    }
    return(
        <div className='sort-header d-flex flex-column align-items-center mb-3'>
            {info ? <InfoModal setInfo={setInfo} info={info} /> : null}
            <h2 className="memory-sort-header mb-2">Memory Sort
            <svg xmlns="http://www.w3.org/2000/svg" onClick={clickInfo} width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            </h2>
            <Menu />
            <div className='sort-btn-container text-center'>
                <button className="shuffle-cards cust-btn" onClick={(e) => shuffle(e)}>Start</button>
                <button className='submit-cards off cust-btn mb-3' data-toggle="modal" data-target="#exampleModalCenter" onClick={checkwinStatus}>Finished!</button>
            </div>
            <FinishModal restart={props.restart} closeModal={closeModal} status={winStatus}/>
            <LostModal restart={props.restart} closeModal={closeModal} status={lossStatus}/>
        </div>
    )
}