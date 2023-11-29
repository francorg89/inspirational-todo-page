import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuotes = createAsyncThunk(
    "quotes/getQuotes",
    async ()=>{
        const url = "https://api.quotable.io/quotes/random?limit=20";
        const json = await fetch(url);
        const response = await json.json();
        return response;
    }
);


const quotesSlice = createSlice({
    name:"quotes",
    initialState:{
        quotes:[],
        status:"inital",
        current:0
    },
    reducers:{
        nextQuote:(state)=>{
            const {current,quotes} = state;
            if(current === quotes.length-1)
                state.current=0;
            else
                state.current++;
        }
    },
    extraReducers:buldier=>{
        buldier.addCase(getQuotes.pending,(state)=>{
            state.status="pending";
        }).addCase(getQuotes.rejected,(state)=>{
            state.status="rejected";
        }).addCase(getQuotes.fulfilled,(state,action)=>{
            state.quotes=action.payload;
            state.status="ready";
        })
    }
});

export default quotesSlice.reducer;
export const selectStatus = (state) => state.quotes.status;
export const selectQuote = state => state.quotes.quotes[state.quotes.current];
export const { nextQuote } = quotesSlice.actions;
