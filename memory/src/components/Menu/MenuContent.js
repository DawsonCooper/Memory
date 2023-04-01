import React, {useEffect} from 'react';
import '../../styles/Menu/MenuContent.css';
import { Link } from 'react-router-dom';

// This component should have the content we want for out navigation menu mainly out links back and forth between pages 
// We will likely need some conditional rendering to see which page we are currenly on do disable or hide nav links to the page we are already on

export default function MenuContent(props){
    
    // This will run when the menu is rendered in menu.js and it animates the menu open
    useEffect(() => {
        let menu = document.querySelector('.menu-container');
        if (!menu.classList.contains('open')){
            setTimeout(() =>{
            menu.classList.add('open');
        }, 10)
        }        
        console.log('open menu')
    },[])
    
    // Removes the open class using close from the menu which animates the closing of the menu waits 100ms to call the modMenu function from menu.js
    const initiateClose = () => {
        close()
        setTimeout(() =>{
            props.modMenu()
        }, 100)  
    }
    const close = () =>{
        let menu = document.querySelector('.menu-container');
        if (menu.classList.contains('open')){
            menu.classList.remove('open')
        }
    }

    return (
            <div className='menu-container'>
                <div className='menu-header'>
                    <h1>Games</h1>
                    <svg onClick={initiateClose} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                    </svg>
                </div>
                <Link to='/'>
                    <div className='mb-2'>Memory Shuffle</div>
                </Link>
                <Link to='/sort'>
                    <div>Memory Sort</div>
                </Link>
                <Link to='/login'>
                    <div>Login</div>
                </Link>
                
            </div>
    )
}