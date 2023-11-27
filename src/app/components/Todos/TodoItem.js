import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../../features/todosSlice";


export function TodoItem({todo}){
    const {id, name,completed} = todo;
    const [visible,setVisible] = useState(false);
    const dispatch = useDispatch();
    

    const clase = completed? "completed" : "";

    const handleClick = ()=>{
        
        dispatch(toggleTodo(id));
    }
    const handleDeleteClick= () => {
        dispatch(deleteTodo(id));
    }

   

    
    return(
        <div onMouseOver={()=>{setVisible(true)}} onMouseOut={()=>{setVisible(false)}} className={`todo ${clase}`}>
            <p>{name}</p>
            {visible? 
                <div className="buttons">
                    <button id="toggle" onClick={handleClick}>{completed? "UNDO":"DONE"}</button>
                    <button id="delete" onClick={handleDeleteClick}>x</button>
                </div>
            :
                null
            }
        </div>
    )
}