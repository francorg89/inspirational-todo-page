import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice(
    {
    name:"todos",
    initialState:{},
    reducers:{
        addTodo:(state,action)=>{
            const {id,todo} = action.payload;
            state[id]={id:id,name:todo,completed:false};      
        },
        toggleTodo:(state,action)=>{
            state[action.payload].completed? state[action.payload].completed=false:state[action.payload].completed=true;
        },
        deleteTodo:(state,action)=>{
            delete state[action.payload];
        }

    }
    }
);

export default todosSlice.reducer;
export const { addTodo ,toggleTodo , deleteTodo } = todosSlice.actions;
export const selectTodos = (state)=>state.todos; 