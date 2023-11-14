import React, {useState} from 'react';

function SafeCell(props) {

    const {i, j, count} = props;

    // State to tell if the cell has been clicked on or not
    const [clicked, setClicked] = useState(false);

    // handle click function that will allow us to change the state and the class of the cell 
    const handleClick = () => {
        setClicked(true);
    
    }

    return(
        <div className={clicked ? 'cell cell-safe exposed-safe' : 'cell cell-safe'} key={[i, j]} onClick={handleClick}>{count}</div>
    )



}
export default SafeCell;