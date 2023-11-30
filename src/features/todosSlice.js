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
            let color;
            switch(newId%5){
                case 0: color="red"; break;
                case 1: color="blue"; break;
                case 2: color="green"; break;
                case 3: color="purple"; break;
                case 4: color="orange"; break;
                default: break;
    }
            state.todos[newId]={id:newId,name:action.payload,completed:false,color};
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
 