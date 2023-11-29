import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes, selectStatus } from "../../../features/quotesSlice";
import { ShowQuote } from "./ShowQuote";
import "../../css/quotes.css";



export function Quote(){

    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    

    useEffect(()=>{
    dispatch(getQuotes());
    },[dispatch])



    switch(status){
        case "pending" : return <footer> loading ...</footer>
        case "rejected" : return <footer><p>Somethig went wrog try again !!!</p><button>Try again</button></footer>
        case "ready": return <ShowQuote />
        default:return;
            
    }
    
    

}