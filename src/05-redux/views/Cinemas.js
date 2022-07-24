import React, { useState } from 'react'
import store from '../redux/store'

export default function Cinemas(props) {

    // 不需要订阅，每次切换路由的时候，都会重新进入此组件，重新读一遍初始值就行了
    const [cityName, setcityName] = useState(store.getState().CityReducer.cityName)

    return (
        <div>
            <div onClick={() => {
                props.history.push(`/city`)
            }}>{cityName}</div>
            <div>Cinemas</div>
        </div>
    )
}
