import React, { useEffect, useState } from "react";
import  "../../css/weather.css";
import { IconW } from "./IconW";






export function Weather(){
    let flag;
    const Baseurl = "https://api.openweathermap.org/data/2.5/weather?";
    const key="&appid=2ad1921d089f6c1e5048101ec44839b3";
    const [data,setData] = useState();
    
    
    if("geolocation" in navigator)
        flag=true;
    else
        flag=false;

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            async(position)=>{
                

                const lat="lat="+position.coords.latitude;
                const long="&lon="+position.coords.longitude;
                const units="&units=metric"
                const url=Baseurl+lat+long+key+units;
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                

            }
        );
        
        
    },[]);
    
   
   return (
   <header>
        {!flag?
        <h1>Your browser do not use location</h1>
        :data?
            <IconW data={data} />
            :
            <h1>Loading ...</h1>
        
        }
        
   </header>);  


}