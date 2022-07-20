import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'

import style from './css/Film.module.css'

console.log(style)

export default class Films extends Component {
    render() {
        return (
            <div className={style.film + " aaaa"}>
                <div style={{ height: "200px", background: 'yellow' }}>大轮播</div>
                <ul>
                    <li>
                        <NavLink to="/films/nowplaying" activeClassName={style.hfactive}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingsoon" activeClassName={style.hfactive}>即将上映</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/films/nowPlaying" component={Nowplaying} />
                    <Route path="/films/comingsoon" component={Comingsoon} />
                    <Redirect from='/films' to='/films/nowplaying' />
                </Switch>

            </div>
        )
    }
}
