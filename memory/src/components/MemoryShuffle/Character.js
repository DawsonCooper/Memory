import React from 'react';
import '../../styles/Character.css'
// This function will be the character (image and name) we will nest each one inside styled cards

export default function Character (props){
    return(
        <div className='character-wrapper'>
            <div className='image-wrapper'>
                <img className='char-image' src={props.image} alt={props.alternative} />
            </div>
            <div>
                <h3 className='char-header'>{props.charHead}</h3>
            </div>
            
        </div>
    )
}