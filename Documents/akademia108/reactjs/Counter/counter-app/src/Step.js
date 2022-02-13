import React, { Component } from 'react';
import './Step.css';



function Step(props) {
      
    /* console.log(props); */

    return (

    <div className="step">
        
        <span>Krok: </span>

        <input  
            ref={props.actualStep}
            onChange={() => {
            props.inputMethod();
            }} type="number" />
            
    </div>

    );
}
export default Step;