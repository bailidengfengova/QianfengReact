import React, { useState, useEffect } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {

    // 不需要订阅，每次切换路由的时候，都会重新进入此组件，重新读一遍初始值就行了
    const [cityName, setcityName] = useState(store.getState().CityReducer.cityName)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            store.dispatch(getCinemaListAction())
        } else {
            console.log('store缓存');
        }
    }, [])


    return (
        <div>
            <div onClick={() => {
                props.history.push(`/city`)
            }}>{cityName}</div>
            <div>Cinemas</div>
        </div>
    )
}
