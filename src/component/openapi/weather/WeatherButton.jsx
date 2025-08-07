import React from "react";
import {Button} from "react-bootstrap"

const WeatherButton = ({cities, btnHandler, location, city}) => {
    console.log("[debug] >>> cities : ", cities);
    console.log("[debug] >>> city : ", city);
    return (
        <div className="weather-btn">
            <Button className="btn"
                variant={`${city == null ? "outline-warning" : "warning"}`}
                    onClick={location}>
                Current Location
            </Button>
            {
                cities.map((item, idx) => {
                    return (
                       <Button className="btn"
                            key={idx}
                            variant={`${city == item ? "outline-warning" : "warning"}`}
                            onClick={() => {
                                btnHandler(item);
                            }}>
                        {item}   
                    </Button> 
                    )       
                })
            }   
        </div>
    );
};

export default WeatherButton;