import React, {useState} from 'react';
import '../../styles/MinesweeperStyles/gameboard.css';

const MinesweeperBoard = (props) => {

  // how we will handle cell clicks


  

  console.log(props.gameCells)
  
  return (
    <div id='gameboard'>
      {props.gameCells}
    </div>
  );
}

export default MinesweeperBoard;
