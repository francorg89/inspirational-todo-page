import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../../features/todosSlice";


export function TodoForm(){

    const [todo,setTodo]=useState("")
    const dispatch = useDispatch();
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo({id:uuidv4(),todo}))
        setTodo("");
    }
    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo" >What is in your mind today?</label>
            <input id="todo" type="text" value={todo} onChange={({target})=>{setTodo(target.value)}}/>
            
        </form>
    );
}