import React, {useReducer} from "react";
import { initialState } from './reducerFunction';
import reducer from './reducerFunction';

const SimpleCalculator = () => {

    const [state, dispatch] = useReducer(reducer, initialState); 
   
   const numbers = [0, 1, 2, 3 , 4 , 5 , 6 , 7 , 8 , 9]
 
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-2 m-4">
              <h2> Number 1</h2>
              {
                numbers.map((number) => {
                  return (
                    <button onClick={() => dispatch({type : 'SET_NUM_ONE', number})} className="p-2" key="number">
                     {number}
                    </button>
                  )
                })  
              }
          </div>
          <div className="col-md-4 offset-md-2 m-4">
              <h2> Number 2</h2>
              {
                numbers.map((number) => {
                  return (
                    <button onClick={() => dispatch({type : 'SET_NUM_TWO', number})} className="p-2" key="number">
                     {number}
                    </button>
                  )
                })  
              }
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-4 m-4">
            <h2> Actions </h2>
            <button className="p-2" onClick={() => dispatch({type : 'ADD'})}> + </button>
            <button className="p-2" onClick={() => dispatch({type : 'SUBTRACT'})} > - </button>
            <button className="p-2" onClick={() => dispatch({type : 'RESET'})}> c </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-4 m-4">
            Result: {state.num1} {state.num2} {state.result}
          </div>
        </div>
    </div>
  )

}

export default SimpleCalculator;