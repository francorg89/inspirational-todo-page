import React from "react";

import { useSelector } from "react-redux";
import { selectTodos } from "../../../features/todosSlice";
import { TodoItem } from "./TodoItem";

export function ItemList(){

    const todos = useSelector(selectTodos);
    

   
    return (
        <div className="items-container">
            {Object.keys(todos).map(
                key => <TodoItem key={key} todo={todos[key]}/>)}
        </div>
    );
}