import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../../features/todosSlice";


export function TodoItem({todo}){
    const {id, name,completed} = todo;
    const [visible,setVisible] = useState(false);
    const dispatch = useDispatch();
    

    const clase = completed? "completed" : "";
    let color;
    switch(id%5){
        case 0: color="red"; break;
        case 1: color="blue"; break;
        case 2: color="green"; break;
        case 3: color="purple"; break;
        case 4: color="orange"; break;
        default: break;
    }

    const handleClick = ()=>{
        
        dispatch(toggleTodo(id));
    }
    const handleDeleteClick= () => {
        dispatch(deleteTodo(id));
    }

    
    return(
        <div onMouseOver={()=>{setVisible(true)}} onMouseOut={()=>{setVisible(false)}} className={`todo ${clase} ${color}`}>
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