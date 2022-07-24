import React, { Component } from 'react'
import { HashRouter as Router, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
// import Nowplaying from '../views/films/Nowplaying'

function isAuth() {
    return localStorage.getItem("token")
}

export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                {this.props.children}
                <Switch>
                    <Route path="/films" component={Films} />
                    {/* <Route path="/films/nowPlaying" component={Nowplaying} /> */}

                    <Route path="/cinemas" component={Cinemas} />
                    {/* <Route path="/center" component={Center} /> */}
                    {/* 路由拦截 */}
                    {/* <Route path="/center" render={(props) =>{
                        return isAuth() ? <Center {...props}/> : <Redirect to="/login"/>
                    }} /> */}
                    {/* withRouter写法 */}
                    <Route path="/center" render={() => {
                        return isAuth() ? <Center /> : <Redirect to="/login" />
                    }} />


                    <Route path="/login" component={Login} />
                    <Route path="/city" component={City} />

                    {/* 动态路由方法 */}
                    <Route path="/detail/:myid" component={Detail} />
                    {/* <Route path="/detail" component={Detail} /> */}

                    <Redirect from="/" to="/films" exact />

                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}
