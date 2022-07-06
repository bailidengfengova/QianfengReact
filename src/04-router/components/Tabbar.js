import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/films" activeClassName='hfactive'>电影</NavLink>
                        {/* <a href='#/films'>电影</a> */}
                    </li>
                    <li>
                        <NavLink to="/cinemas" activeClassName='hfactive'>影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center" activeClassName='hfactive'>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
