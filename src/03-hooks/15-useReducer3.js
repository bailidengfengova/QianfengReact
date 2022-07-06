import React, { useEffect, useReducer, useContext } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() // 创建context对象

const initialState = {
    info: "",
    filmList: []
}

const reducer = (prevState,action) => {
    var newState = {...prevState}
    switch (action.type) {
        case "setFilmList":
            newState.filmList = action.value
            return newState;
        case "setInfo":
            newState.info = action.value
            return newState;
        default:
            return prevState;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            dispatch({
                type: "setFilmList",
                value: res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {
                    state.filmList && state.filmList.map(item => <FilmItem key={item.filmId} {...item} />)
                }
                <FilmDetail />
            </div>
        </GlobalContext.Provider>
    )

}

function FilmItem(props) {
    let { name, poster, grade, synopsis } = props;

    const {dispatch} = useContext(GlobalContext)

    return <div className='filmitem' onClick={() => {
        // console.log(synopsis);
        dispatch({
            type: "setInfo",
            value: synopsis
        })
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分： {grade}</div>
    </div>
}

function FilmDetail() {
    const {state} = useContext(GlobalContext)
    return <div className='filmdetail'>
        {state.info}
    </div>
}
