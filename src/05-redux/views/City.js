import React, { useState } from 'react'
import store from '../redux/store'

export default function City(props) {

    const [list] = useState(['北京', '上海', '深圳', '广州', '杭州'])

    return (
        <div>
            City
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={() => {
                            store.dispatch({
                                type: 'change-city',
                                payload: item
                            })
                            props.history.push(`/cinemas`)
                        }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}
