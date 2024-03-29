import React, {useReducer} from 'react'

// 数据逻辑
// 处理函数
const reducer = (prevState, action) => {

    console.log('reducerer',prevState,action);
    let newState = {...prevState}
    switch (action.type) {
        case "minus":
            newState.count --;
            return newState;
        case "add":
            newState.count ++;
            return newState;
        default:
            return prevState;
    }
}

// 外部的对象
const initialState = {
    count: 0
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {/* 视图逻辑 */}
            <button onClick={() => {
                dispatch({
                    type: "minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "add"
                })
            }}>+</button>
        </div>
    )
}
