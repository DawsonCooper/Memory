import React, {useState} from 'react';

function MineCell(props) {

    const {i, j} = props;
    const [clicked, setClicked] = useState(false);

    // handle click function that will allow us to change the state and the class of the cell 
    const handleClick = () => {
        setClicked(true);
    
    }

    return(
        <div className={clicked ? 'cell cell-mine exposed-mine' :'cell cell-mine'} key={[i, j]} onClick={handleClick}>

        <svg id='bomb' className={clicked ? 'exposed-bomb' :'hidden-bomb'} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" fill="#000000">
          {/* Bomb Body */}
          <ellipse cx="32" cy="40" rx="24" ry="20" fill="#000000" />

          {/* Fuse */}
          <path d="M32 20 Q30 5 28 20" fill="#BDC3C7" />

          {/* Eyes */}
          <circle cx="24" cy="36" r="2" fill="#FF0000" />
          <circle cx="40" cy="36" r="2" fill="#FF0000" />

          {/* Mouth */}
          <path d="M30 48 Q32 52 34 48" fill="#FF0000" stroke="#FF0000" strokeWidth="2" />

          {/* Warning Symbol */}
          <text x="32" y="52" fontSize="12" fill="#FF0000" textAnchor="middle" alignmentBaseline="middle">
            !
          </text>
        </svg>
        </div>
    )



}
export default MineCell;