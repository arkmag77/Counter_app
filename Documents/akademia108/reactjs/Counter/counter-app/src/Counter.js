
import React, { Component } from 'react';

import './Counter.css';

import Display from './Display';

import ButtonsPanel from './ButtonsPanel';

import Step from './Step';




// class Counter extends Component {
//     render() {

//         // let randomNumber = Math.floor(Math.random() * (108-1+1)+1);

//         return (
//             <div className='counter'>
//                 Counter: 
//                 <span className='value'> 
//                 {this.props.initialValue}
//                 </span> 
//             </div>
//         );
//     }
// }

// export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (props.initialValue-1+1)+1);

//     return (
//         <div className='counter'>
//             Counter: 
//             <span className='value'> 
//             {randomNumber}
//             </span>

//         </div>
//     );
// }

// export default Counter;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initialValue,
            inputStep: 0,
        }
    }

    changeValue = (action) => {

        this.setState( (prevState, prevProps) => {

            let step_1 = prevState.inputStep;

            let currentCounterValue = prevState.counterValue;
            
            if (action ==='add') {

                currentCounterValue += 1;
                
            } else if (action ==='reinit') {

                currentCounterValue = prevProps.initialValue;

            } else if (action ==='increase_1') {

                currentCounterValue = prevState.counterValue + step_1;

            }else {

                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
            
    }


    // changeValue = () => {
    //     this.setState((prevState) => {

    //         let step = parseInt(this.inputStep.value);

    //         if (isNaN(step)) {
    //             return ({
    //                 counter2Value: prevState.counter2Value,
    //             })

    //         } else {

    //             return ({
    //                 counter2Value: (prevState.counter2Value + step),

    //             })
    //         }

    //     });
    // }

    // resetValue = () => {
    //     this.setState( {

    //         counter2Value: 0
           
    //     });
    // }



    updateStep = () => {
        
        this.setState(() => {

            let step =  parseInt(this._inputStep.value);
           
            if (isNaN(step)) {

                return ({

                    inputStep: 0,

                })

            } else

                return ({

                    inputStep: step

                }); 

        });
    }




    render() {
        return (
            <div className="counter">

                Licznik:
                <Display displayValue={this.state.counterValue} /> 

                <ButtonsPanel buttonMethod={this.changeValue} InputStepState={this.state.inputStep} />

                <Step actualStep={(data) => { this._inputStep = data; console.log('ref_Step_1') }} inputMethod={this.updateStep} /> 
                
            </div>
        )
    }
}
export default Counter;

