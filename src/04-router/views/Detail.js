import React, { useEffect } from 'react'

export default function Detail(props) {
    // query传参
    // console.log(props.location.query.id,"利用id去后端拿数据");
    // state传参
    // console.log(props.location.state.myid);

    useEffect(() => {
        console.log('create')

        // store.dispatch 通知
        return () => {
            console.log('distory')
        }
    }, [])

    return (
        <div>
            detail-{props.match.params.myid}
        </div>
    )
}
