import React, {useState} from 'react';
import '../../styles/MinesweeperStyles/gameboard.css';
function MinesweeperBoard() {
  const height = 8;
  const width = 8;
  let mines = []
  let gameCells = []
  // how we will handle exploding bombs





  // create an array of strings that represent the location of mines
  for(let i = 0; i < 8; i++){
    let ran1 = Math.floor(Math.random() * height);
    let ran2 = Math.floor(Math.random() * width);
    while(true){
      if(mines.includes(`${ran1}${ran2}`)){
        ran1 = Math.floor(Math.random() * height);
        ran2 = Math.floor(Math.random() * width);
      }else{
        // creates out mines as a string to avoind issues with comparing arrays or sets in js
        mines.push(`${ran1}${ran2}`);
        break;
      }
    }
  }

  // create board given mines and dimensions
  for(let i = 0; i < height; i++){
    gameCells[i] = []
    for(let j =0; j < width; j++){

      if (mines.includes(`${i}${j}`)){
        gameCells[i].push(
        <div className='cell cell-mine' key={[i, j]}>

        <svg id='bomb' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" fill="#000000">
          {/* Bomb Body */}
          <ellipse cx="32" cy="40" rx="24" ry="20" fill="#000000" />

          {/* Fuse */}
          <path d="M32 20 Q30 5 28 20" fill="#BDC3C7" />

          {/* Eyes */}
          <circle cx="24" cy="36" r="2" fill="#FF0000" />
          <circle cx="40" cy="36" r="2" fill="#FF0000" />

          {/* Mouth */}
          <path d="M30 48 Q32 52 34 48" fill="#FF0000" stroke="#FF0000" stroke-width="2" />

          {/* Warning Symbol */}
          <text x="32" y="52" font-size="12" fill="#FF0000" text-anchor="middle" alignment-baseline="middle">
            !
          </text>
        </svg>
        </div>
        )
      }
      else{
        gameCells[i].push(
        <div className='cell cell-safe' key={[i, j]}>0</div>
        )
      }
    }
  }

  // visit all neighbors of each mine and increase their value by 1
  for(let i = 0; i < mines.length; i++){

    // get the index of the mine itself 
    let index = [+mines[i][0],+mines[i][1]];


    let mine = gameCells[index[0]][index[1]];

    // these will be the index of all real neighbors out of bounds will remain 0 
    let left = 0;
    let right = 0;
    let up = 0;
    let down = 0;
    let upLeft =0;
    let upRight = 0;
    let downLeft = 0;
    let downRight = 0;
    
    if (index[1]-1 < 8 && index[1]-1 > 0){
      left = gameCells[index[0]][index[1]-1];
    }
    if (index[1]+1 < 8 && index[1]+1 > 0){
      right = gameCells[index[0]][index[1]+1];
    }
    if (index[0]-1 < 8 && index[0]-1 > 0){
      up = gameCells[index[0]-1][index[1]];
    }
    if (index[0]+1 < 8 && index[0]+1 > 0){
      down = gameCells[index[0]+1][index[1]];
    }
    if (index[0]-1 < 8 && index[0]-1 > 0 && index[1]-1 < 8 && index[1]-1 > 0){
      upLeft = gameCells[index[0]-1][index[1]-1];
    }
    if (index[0]-1 < 8 && index[0]-1 > 0 && index[1]+1 < 8 && index[1]+1 > 0){
      upRight = gameCells[index[0]-1][index[1]+1];
    }
    if (index[0]+1 < 8 && index[0]+1 > 0 && index[1]-1 < 8 && index[1]-1 > 0){
      downLeft = gameCells[index[0]+1][index[1]-1];
    }
    if (index[0]+1 < 8 && index[0]+1 > 0 && index[1]+1 < 8 && index[1]+1 > 0){
      downRight = gameCells[index[0]+1][index[1]+1];
    }



    
    let neighbors = [left, right, up, down, upLeft, upRight, downLeft, downRight];
    for (let j = 0; j < neighbors.length; j++){
      if (neighbors[j] !== 0){
        if (neighbors[j].props.className === 'cell cell-safe'){
          
        }
      } 
    }
  }



  return (
    <div id='gameboard'>
      {gameCells}
    </div>
  );
}

export default MinesweeperBoard;
