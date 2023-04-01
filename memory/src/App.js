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


  const asyncTest = async (e) => {
    e.preventDefault();
    const testResponse = await fetch('/expressCheck');
    const jsonTestResponse = await testResponse.json();
    console.log(jsonTestResponse);
    return !testResponse.status ? "Error" : jsonTestResponse;
  }
  const fetchTest = (e) => {
    e.preventDefault();
    fetch('/expressCheck', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    }).then(response => response.json())
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  
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
        {/*
        ---------------------------    These are our express buttons only work locally so commenting out    -------------------------------------- 
        <form method="get" action="/" onClick={(e) => {asyncTest(e)}} >
          <input type="submit" class='btn btn-primary mb-2' value='Express Async Await Function Test' />
        </form>
        <form method="get" action="/" onClick={(e) => {fetchTest(e)}}>
          <input type="submit" class='btn btn-primary' value='Express Fetch Function Test' />
        </form>
        */}
          <Cards />
        </div>
      </CardCountContext.Provider>
    </ScoreContext.Provider>

  );
}

export default App;
