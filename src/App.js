import React, { useEffect } from 'react';
import { Todo } from "../src/app/components/Todos/Todo.js"
import { nextBg,backBg, loadBackgrounds, selectImage } from './features/backgroundSlice.js';
import { Weather } from './app/components/Weather/Weather.js';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Quote } from './app/components/Quote/Quote.js';

function App() {

  const dispatch = useDispatch();
  const image = useSelector(selectImage);
  const next = ">"
  const back = "<"
  useEffect(()=>{
    dispatch(loadBackgrounds());
  },[dispatch]);
  
  
  return (
    <div className="background" style={{backgroundImage:`url(${image})`}}>
      <div className="App" >
      
        <Weather />
        <main>
          <button className='move' onClick={()=>{dispatch(backBg())}} type="button" >{back}</button>
          <Todo />
          <button className='move' onClick={()=>{dispatch(nextBg())}} type="button">{next}</button> 
        </main>
        <Quote />  
      </div>
    </div>
  );
}

export default App;
