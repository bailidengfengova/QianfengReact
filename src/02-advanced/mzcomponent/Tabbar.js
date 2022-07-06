import React, { Component } from 'react'

export default class Tabbar extends Component {

    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            }
        ],
        current: 0
    }

    handleClick(index) {
        console.log(index);
        this.setState({
            current: index
        })

        // 通知父组件修改父组件的状态
        this.props.myevent(index);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li
                                key={item.id}
                                className={this.state.current === index ? 'active' : ''}
                                onClick={() => this.handleClick(index)}
                            >
                                {item.text}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
