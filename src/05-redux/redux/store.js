// 1. 引入redux
// 2. createStore( reducer )
import { createStore } from "redux";

const reducer = (prevState = {
    show: true
}, action = {}) => {
    console.log('action', action);
    let newState = { ...prevState }
    switch (action.type) {
        case 'hide-tabbar':
            newState.show = false;
            return newState;
        case 'show-tabbar':
            newState.show = true;
            return newState;
        default:
            return prevState;
    }
}

const store = createHanfeiStore(reducer);

// redux源码解析 简单版 没考虑合并 异步
/**
 * store.dispatch
 * store.subscribe
 * store.getState
 */
function createHanfeiStore(reducer) {
    // 发布订阅模式的写法
    let list = [];
    let state = reducer()
    // 如果不在reducer里赋初始值，可以在这里赋初始值
    // let state = reducer(undefined, {})
    function subscribe(callback) {
        list.push(callback)
    }

    function dispatch(action) {
        state = reducer(state, action)
        for (let cb in list) {
            list[cb] && list[cb]()
        }
    }

    function getState() {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    }

}

export default store;