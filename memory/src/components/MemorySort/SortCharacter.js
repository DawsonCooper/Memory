import React from 'react';
import '../../styles/MemorySortStyles/sortchar.css';

export default function SortChar(props){
    return (
        <div className='sort-character-wrapper'>
            <div className='sort-image-wrapper'>
                <img className='sort-char-image' src={props.image} alt={props.alternative} />
            </div>
            <div>
                <h3 className='sort-char-header'>{props.charHead}</h3>
            </div>
            
        </div>
    )
}