import './App.css';
import Cards from './components/MemoryShuffle/Card';
import React, {useReducer} from 'react';
import {Helmet} from 'react-helmet'

// CURRENT SCORE CONTEXT
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


// CARD COUNT CONTEXT 
export const CardCountContext = React.createContext()
const baseCount = 12;
const cardCountReducer = (state, action) => {
  return action.count > 0 ? action.count : state;
}


function App() {
  const [score, dispatch] = useReducer(scoreReducer, baseScore)
  const [cardCount, cardCountDispatch] = useReducer(cardCountReducer, baseCount)
  return (
    <ScoreContext.Provider value={{scoreState: score, scoreDispatch: dispatch}}>
      <CardCountContext.Provider value={{cardCountState: cardCount, cardCountDispatch: cardCountDispatch}}>
        <div className="App">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Memory Games</title>
                <link rel="canonical" href="https://dawsoncooper.github.io/Memory/" />
                <meta name="description" content="Memory Games" />
        </Helmet>
          <Cards />
        </div>
      </CardCountContext.Provider>
    </ScoreContext.Provider>

  );
}

export default App;
