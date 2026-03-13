import React from "react";
import "../styles/Visualizer.css";
function Visualizer({array}){
  
  return(
    <div className="array-container">
        {array.map((value, index) => (
            <div key={index}
            className='array-bar'
            style={{height: `${value}px`,backgroundColor: "blue"}}>
            </div>
        ))}

            </div>);
}

export default Visualizer;