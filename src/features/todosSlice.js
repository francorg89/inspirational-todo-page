import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice(
    {
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({name:action.payload,completed:false});
        }
    }
    }
);

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;
export const selectTodos = (state)=>state.todos; 