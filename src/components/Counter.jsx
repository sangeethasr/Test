import { type } from '@testing-library/user-event/dist/type';
import React, {useReducer} from 'react'

export default function Counter() {

  function reducer(state, action){

    switch (action.type) {
      case "increment":{
        const newCount = state.count + 1;
        const hasError = newCount > 5
        return{ ...state, count: hasError? state.count : newCount, error: hasError? "Maximum reached" : null }
      }
      case "decrement":{
        const newCount= state.count - 1;
        const hasError = newCount < 0;
        return{ ...state, count: hasError? state.count : newCount, error: hasError? "Minimum reached": null}
      }
    
      default:
        return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, {count: 0, error: null})

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      {state.error !== null && <p style={{color: "red"}}>{state.error}</p>}
      <button onClick={()=> dispatch({type: "increment"})}>Increment</button>
      <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
    </div>
  )
}
