export const initialState = {
    num1: 0,
    num2: 0,
    result: 'no result yet'
  }
  
  export default function reducer (state = initialState , {type, number}){
  
    switch(type){
      case 'SET_NUM_ONE':
        return {...state, num1: number}
      case 'SET_NUM_TWO':
        return {...state, num2: number}
      case 'ADD':
        return {...state, result: state.num1 + state.num2}
      case 'SUBTRACT':
            return {...state, result: state.num1 - state.num2}
      case 'RESET':
                return initialState;
      default:
        return state;
    }
  }