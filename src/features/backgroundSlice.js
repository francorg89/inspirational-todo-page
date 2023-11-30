import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadBackgrounds = createAsyncThunk(
    "backgrounds/loadBackgrounds",
    async ()=>{
        const url="https://api.unsplash.com/photos?client_id=5AOdirWWJnB-cQyx3iuq3cVhEijJi3bkTr4YQ6wgOvo";
        const response = await fetch(url)
        const jsonresponse= await response.json();
        return jsonresponse;
    }
);

const backgroundSlice = createSlice({
    name:"backgrounds",
    initialState:{
        index:0,
        images:[],
        loaded:false
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
    },
    extraReducers:(builder)=>{
        builder.addCase(
            loadBackgrounds.pending,(state,action)=>{
                console.log("pending");
            }
        ).addCase(
            loadBackgrounds.rejected,(state,action)=>{
                console.log("REJECTED");
            }
        ).addCase(
            loadBackgrounds.fulfilled,(state,action)=>{
                state.images=action.payload;
                state.loaded=true;
            })
    }
});

export default backgroundSlice.reducer;
export const {nextBg,backBg} = backgroundSlice.actions;
export const selectImage = 
    (state) => {
        if(state.background.loaded){
        const obj = state.background.images[state.background.index];
        const image = obj.urls.small;
        return image;    
    }
    }; 