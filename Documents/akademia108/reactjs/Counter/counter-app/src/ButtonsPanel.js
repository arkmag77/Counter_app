import React from 'react';

import './ButtonsPanel.css';


function ButtonsPanel(props) {
    console.log(props);
    return (
        <div className="buttons-panel">
            {/* <button onClick={props.buttonMethod}>Add</button> */}
            <button onClick={()=>{
                console.log('Add clicked');
                props.buttonMethod('add');
            }}>Add 1</button>
            <button onClick={()=>{
                console.log('reinit clicked');
                props.buttonMethod('reinit');
            }}>ReInit</button>
            <button onClick={()=>{
                console.log('reset clicked');
                props.buttonMethod('reset');
            }}>Reset</button>
            <button onClick={()=>{
                console.log('increse_1 clicked');
                props.buttonMethod('increase_1');
            }} >Zwiększ o {props.InputStepState}</button>
        </div>
    );
}

export default ButtonsPanel;