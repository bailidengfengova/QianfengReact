// 1. 引入redux
// 2. createStore( reducer )
import { combineReducers, createStore } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";

const reducer = combineReducers({
    CityReducer,
    TabbarReducer
})
const store = createStore(reducer);

// redux源码解析 简单版 没考虑合并 异步
/**
 * store.dispatch
 * store.subscribe
 * store.getState
 */
// function createHanfeiStore(reducer) {
//     // 发布订阅模式的写法
//     let list = [];
//     let state = reducer()
//     // 如果不在reducer里赋初始值，可以在这里赋初始值
//     // let state = reducer(undefined, {})
//     function subscribe(callback) {
//         list.push(callback)
//     }

//     function dispatch(action) {
//         state = reducer(state, action)
//         for (let cb in list) {
//             list[cb] && list[cb]()
//         }
//     }

//     function getState() {
//         return state;
//     }

//     return {
//         subscribe,
//         dispatch,
//         getState
//     }

// }

export default store;