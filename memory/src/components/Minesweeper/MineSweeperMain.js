import React/*, { useState, useContext }*/ from 'react';
import '../../styles/MinesweeperStyles/minesweeper.css';
import Menu from '../Menu/Menu';
import Gameboard from './MinesweeperBoard';
import '../../styles/Menu/MenuContent.css';


export default function MineSweeperMain(props){

    return(
        <>
        <div id='title'>
            <h1>Minesweeper</h1>
            <Menu />
        </div>
        <div id='game-container'>
            <Gameboard />
        </div>
        
        </>
    )
}