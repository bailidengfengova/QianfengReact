import React, { Component } from 'react'

export default class App extends Component {

    state = {
        mytext: '11111'
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState,value) { 
        console.log('componentDidUpdate', value)
    } 

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return 100
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        mytext: '22222'
                    })
                }}>click</button>
                {this.state.mytext}
            </div>
        )
    }
}
