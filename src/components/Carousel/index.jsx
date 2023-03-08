import React, { Component } from "react";
import Slider from "infinite-react-carousel";

class InfiniteSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
        settings: {
            dots: true
        }
        };
    }

    render() {
        const { settings } = this.state;
        return (
        <Slider {...settings}>
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
        </Slider>
        );
    }
}

export default InfiniteSlider;