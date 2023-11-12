import React from 'react';
import '../../styles/MinesweeperStyles/gameboard.css';
function MinesweeperBoard() {
  let height = 8;
  let width = 8;
  let mines = []
  let gameCells = []
  for(let i = 0; i < 8; i++){
    let ran1 = Math.floor(Math.random() * height);
    let ran2 = Math.floor(Math.random() * width);
    while(true){
      if(mines.some(([x, y]) => x === ran1 && y === ran2)){
        ran1 = Math.floor(Math.random() * height);
        ran2 = Math.floor(Math.random() * width);
      }else{
        mines.push([ran1, ran2]);
        break;
      }
    }
  }

  for(let i = 0; i < height; i++){
    for(let j =0; j < width; j++){
      console.log({mines});
      console.log([i, j])
      if (mines.some(([x, y]) => x === i && y === j)){
        
        gameCells.push(
        <div className='cell cell-mine' key={[i, j]}></div>
        )
      }
      else{
        gameCells.push(
        <div className='cell cell-safe' key={[i, j]}></div>
        )
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
