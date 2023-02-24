import React, {useState} from 'react';
import MenuContent from './MenuContent';
// This componenet should be a clickable svg or boxicon that when clicked will open up a menucontent componenet
export default function Menu(props){
    const [menu, setMenu] = useState()
    
    function modMenu(){
        setMenu(!menu)
    }

    if(menu){
        return(
            <MenuContent modMenu={modMenu} />
        )
    }else{
        return(
            <svg onClick={modMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list menu-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        )
    }
}