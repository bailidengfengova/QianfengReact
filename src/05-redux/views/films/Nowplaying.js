import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Nowplaying(props) {

  const [list, setlist] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4755259',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setlist(res.data.data.films)
    })
  }, [])

  const history = useHistory()

  const handleChangePage = (id) => {
    // window.location.href = '#/detail/'+id
    // props.history.push(`/detail/${id}`)

    // 1-动态路由传参
    history.push(`/detail/${id}`)

    // 2-query传参
    // history.push({ pathname: '/detail' , query: { id: id}})

    // 3-state传参
    // history.push({pathname: '/detail',state:{myid: id}})
  }

  return (
    <div>
      {
        list.map(item =>
          <WithFilmItem key={item.filmId} {...item} />
        )
      }
    </div>
  )
}

function FilmItem(props) {
  let { name, filmId, poster } = props
  return <li
    // onClick={() => handleChangePage(item.filmId)}
    onClick={() => {
      props.history.push(`/detail/${filmId}`)
    }}
  >
    {/* <img src={poster} /> */}
    {name}
    {/* 声明式路由写法 */}
    {/* <NavLink to={'/detail/'+item.filmId}>{item.name}</NavLink> */}
  </li>
}


const WithFilmItem = withRouter(FilmItem)