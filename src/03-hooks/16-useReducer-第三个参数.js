import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return { count: action.payload };
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function init(initialCountState) {
    return { count: initialCountState.count + 1 };
}

// 这么写可以直接解构
function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialCount, //通过参数传递来的默认值，如果没有第三个参数，则state默认是1
        init //如果有这个参数，则对初始值state做一个更新
    );
    return (
        <div>
            Count:{state.count}
            <button
                onClick={() => dispatch({ type: "reset", payload: initialCount.count })}
            >
                reset
            </button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

function Example() {
    return <Counter initialCount={{ count: 1 }} />;
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Example />
                <hr />
            </div>
        );
    }
}
