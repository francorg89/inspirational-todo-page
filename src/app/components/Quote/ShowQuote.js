
import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextQuote, selectQuote } from "../../../features/quotesSlice";



export function ShowQuote(){

    const dispatch = useDispatch();
    const quote = useSelector(selectQuote);

    useEffect(()=>{
        const id = setInterval(()=>{
            dispatch(nextQuote());
         },60000)

        return () => clearInterval(id);
    })


    return (
    <footer>  
        <h2>{quote.content}</h2>
        <h3>{quote.author}</h3>
    </footer>)

}