import React from "react";

export function IconW(props){

    
    const  data  = props.data;
    const place = data.name;
    const country = data.sys.country;
    const temp= data.main.temp;
    const compArr = data.weather;
    const comp = compArr[0];
    const weather = comp.main;
    const description = comp.description;
    const icon = comp.icon;
    const baseUrl ="https://openweathermap.org/img/wn/";
    const iconUrl = baseUrl+icon+"@2x.png"; 





    return (
        <div className="weather-container">
            <div className="ot-left">
                <h2>{place+", "+country}</h2>
                <p>{description}</p>
                
            </div>
            <div className="left">
                <img src={iconUrl} alt="icon"></img>
                
            
                <div>
                    <h2>{temp+"°C"}</h2>
                    <p>{weather}</p>
                </div>
            </div>        
            
        </div>
    )

}