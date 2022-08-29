import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'

export default class App extends Component {

    state = {
        isShow: store.getState().TabbarReducer.show
    }

    // store.subsribe 订阅
    componentDidMount() {
        store.subscribe(() => {
            // 不会立即触发，有人通知的时候才会触发 想要哪一个得自己拿
            console.log('app 中订阅', store.getState().TabbarReducer.show);

            this.setState({
                isShow: store.getState().TabbarReducer.show
            })
        })
    }

    render() {
        return (
            <div>
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}

/**
 * /films -> Films
 * /cineams -> Cinemas
 * /center -> Center
 */