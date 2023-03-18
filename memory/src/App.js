import './App.css';
import Cards from './components/MemoryShuffle/Card';
import React, {useReducer} from 'react';

export const ScoreContext = React.createContext()

const baseScore = 0;
const scoreReducer = (state, action) => {
  switch (action.type) {
    case 'right':
      return state + 1;
    case 'wrong':
      return baseScore;
    case 'newGame':
      return baseScore;
    default: return state;
  }
}


function App() {
  const [score, dispatch] = useReducer(scoreReducer, baseScore)
  return (
    <ScoreContext.Provider value={{scoreState: score, scoreDispatch: dispatch}}>
      <div className="App">
        <Cards />
      </div>
    </ScoreContext.Provider>

  );
}

export default App;
