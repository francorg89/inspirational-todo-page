import React from "react";

import { useSelector } from "react-redux";
import { selectTodos } from "../../../features/todosSlice";

export function ItemList(){

    const todos = useSelector(selectTodos);
    

    return (
        <div className="items-container">
            {todos.map((todo,i)=><p key={i}>{todo.name}</p>)}
        </div>
    );
}