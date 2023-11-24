import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
    name:"background",
    initialState:{
        index:0,
        images:["aliceblue","gray","silver","aqua"],
        //current:images[index]
    },
    reducers:{
        nextBg:(state)=>{
            const {index,images} = state;
            if(index===images.length-1)
                state.index=0;
            else
                state.index++;
            
        },
        backBg:(state)=>{
            const {index,images} = state;
            if(index===0)
                state.index=images.length-1;
            else
                state.index--;
        }
    }
});

export default backgroundSlice.reducer;
export const {nextBg,backBg} = backgroundSlice.actions;
export const selectBackground = (state) => state.background.images[state.background.index]; 