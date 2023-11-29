import React from 'react';
import { Todo } from "../src/app/components/Todos/Todo.js"
import { nextBg,backBg,selectBackground } from './features/backgroundSlice.js';
import { Weather } from './app/components/Weather/Weather.js';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Quote } from './app/components/Quote/Quote.js';

function App() {

  const dispatch = useDispatch();
  const background= useSelector(selectBackground);
  

  return (


    
    <div className="App" style={{backgroundColor:background}}>
      <Weather />
      <main>
        <input className='move' onClick={()=>{dispatch(backBg())}} type="button" value="<" />
        <Todo />
        <input className='move' onClick={()=>{dispatch(nextBg())}} type="button" value=">" />
      </main>
      <Quote />  
      
      

    </div>
  );
}

export default App;
