import React, {useState} from 'react';
import '../../styles/MinesweeperStyles/gameboard.css';
import MineCell from './MineCell.js';
import SafeCell from './SafeCell.js';
function MinesweeperBoard() {
  const height = 8;
  const width = 8;
  let mines = []
  let gameCells = []
  // how we will handle cell clicks







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
          <MineCell key={[i,j]} i={i} j={j} state={-1}/>
        )
      }
      else{
        gameCells[i].push(
        <SafeCell key={[i,j]} i={i} j={j} count={0} state = {1}/>
        
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
    let left = undefined;
    let right = undefined;
    let up = undefined;
    let down = undefined;
    let upLeft =undefined;
    let upRight = undefined;
    let downLeft = undefined;
    let downRight = undefined;
    
    if (index[1]-1 < 8 && index[1]-1 >= 0){
      left = [index[0], index[1]-1];
    }
    if (index[1]+1 < 8 && index[1]+1 >= 0){
      right = [index[0], index[1]+1];
    }
    if (index[0]-1 < 8 && index[0]-1 >= 0){
      up = [index[0]-1,index[1]];
    }
    if (index[0]+1 < 8 && index[0]+1 >= 0){
      down = [index[0]+1,index[1]];
    }
    if (index[0]-1 < 8 && index[0]-1 >= 0 && index[1]-1 < 8 && index[1]-1 >= 0){
      upLeft = [index[0]-1,index[1]-1];
    }
    if (index[0]-1 < 8 && index[0]-1 >= 0 && index[1]+1 < 8 && index[1]+1 >= 0){
      upRight = [index[0]-1,index[1]+1];
    }
    if (index[0]+1 < 8 && index[0]+1 >= 0 && index[1]-1 < 8 && index[1]-1 >= 0){
      downLeft = [index[0]+1,index[1]-1];
    }
    if (index[0]+1 < 8 && index[0]+1 >= 0 && index[1]+1 < 8 && index[1]+1 >= 0){
      downRight = [index[0]+1,index[1]+1];
    }



    
    let neighbors = [left, right, up, down, upLeft, upRight, downLeft, downRight];
    // neighbors is a list of indexes that are neighbors to the mine and undefined if the neighbor is out of bounds
    for (let j = 0; j < neighbors.length; j++){

      let indexArr = neighbors[j];
      // if the neighbor is in bounds and is a safe cell update its inner html to be the number of mines around it
      if (indexArr !== undefined){
        if (gameCells[indexArr[0]][indexArr[1]].props.state === 1){
          console.log(gameCells[indexArr[0]][indexArr[1]])
          let currCount = gameCells[indexArr[0]][indexArr[1]].props.count;
          currCount++;
          gameCells[indexArr[0]][indexArr[1]] = <SafeCell key={[indexArr[0],indexArr[1]]} i={indexArr[0]} j = {indexArr[1]} count = {currCount} state={1} />
          console.log(gameCells[indexArr[0]][indexArr[1]])
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
