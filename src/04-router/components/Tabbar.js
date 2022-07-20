import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/films" activeClassName={style.hfactive}>电影</NavLink>
                        {/* <a href='#/films'>电影</a> */}
                    </li>
                    <li>
                        <NavLink to="/cinemas" activeClassName={style.hfactive}>影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center" activeClassName={style.hfactive}>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
