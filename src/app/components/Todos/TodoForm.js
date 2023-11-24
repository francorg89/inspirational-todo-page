import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/todosSlice";


export function TodoForm(){

    const [todo,setTodo]=useState("")
    const dispatch = useDispatch();
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(todo))
        e.value="";
    }
    return(<div className="todo-form">
        <form onSubmit={handleSubmit}>
            <p>What is in your mind?</p>
            <input type="text" onChange={({target})=>{setTodo(target.value)}}/>
            
        </form>
    </div>)
}