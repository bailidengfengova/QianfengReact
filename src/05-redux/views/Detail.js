import React, { useEffect } from 'react'
import store from '../redux/store'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
    // query传参
    // console.log(props.location.query.id,"利用id去后端拿数据");
    // state传参
    // console.log(props.location.state.myid);

    useEffect(() => {

        store.dispatch(hide())
        // store.dispatch 通知
        return () => {
            console.log('distory')
            store.dispatch(show())
        }
    }, [])

    return (
        <div>
            detail-{props.match.params.myid}
        </div>
    )
}
