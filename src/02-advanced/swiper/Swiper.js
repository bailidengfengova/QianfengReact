import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination]);

export default class HSwiper extends Component {

    componentDidMount() {
        new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            loop: this.props.loop
        })
    }

    render() {
        return (
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper" style={{height: '200px', background: 'yellow'}}>
                       {this.props.children}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
