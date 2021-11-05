import React, {useReducer} from 'react'

export default function Reducer() {
    const initialState = {count : 0, name: 'jimmy'};

    function reducer(state, action) {
        switch(action.type){
            case 'reset' :
                return initialState;
            case 'increment' :
                return { count: state.count + 1 , name: "timmy"};
            case 'decrement' :
                return { count: state.count - 1 , name: "amy"};
            default :
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count(Reducer) : {state.count}
            <br/>
            Name: {state.name}
            <br/>
            <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
            <button onClick={()=> dispatch({type : 'decrement'})}>-</button>
            <button onClick={()=> dispatch({type : 'increment'})}>+</button>
        </div>
    )
}
