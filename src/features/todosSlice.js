import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice(
    {
    name:"todos",
    initialState:{
        todos:{},
        id:0
    },
    reducers:{
        addTodo:(state,action)=>{
            const newId = state.id+1
            state.todos[newId]={id:newId,name:action.payload,completed:false};
            state.id++;      
        },
        toggleTodo:(state,action)=>{
            
            state.todos[action.payload].completed? state.todos[action.payload].completed=false:state.todos[action.payload].completed=true;
        },
        deleteTodo:(state,action)=>{
            delete state.todos[action.payload];
        }

    }
    }
);

export default todosSlice.reducer;
export const { addTodo ,toggleTodo , deleteTodo } = todosSlice.actions;
export const selectTodos = (state)=>state.todos.todos;
 