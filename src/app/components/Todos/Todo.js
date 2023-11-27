import React from "react"
import "../../css/todo.css";
import { TodoForm } from "./TodoForm";
import { ItemList } from "./ItemList";

export function Todo(){
    return(
    <div className="todo-container">
        <TodoForm />
        <ItemList />
    </div>);
}