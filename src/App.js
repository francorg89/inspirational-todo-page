import React from 'react';
import { images , phrases , wheater} from "../src/app/api.js"
import { Todo } from "../src/app/components/Todos/Todo.js"
import { nextBg,backBg,selectBackground } from './features/backgroundSlice.js';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const background= useSelector(selectBackground);
  

  return (


    
    <div className="App" style={{backgroundColor:background}}>
      <header>{wheater.getWeather()}</header>
      <main>
        <input onClick={()=>{dispatch(backBg())}} type="button" value="<" />
        <Todo />
        <input onClick={()=>{dispatch(nextBg())}} type="button" value=">" />
      </main>
      
      <footer>{phrases.getPhrase()}</footer>  
      
      

    </div>
  );
}

export default App;
