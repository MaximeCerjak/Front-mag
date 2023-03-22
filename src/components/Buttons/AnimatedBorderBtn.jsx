import React from 'react';
import './AnimatedBorderBtn.scss';

const AnimatedBorderButton = ({ text }) => (
    <button className="animated-border-button">
        <span>{text}</span>
        <div className="border-top"></div>
        <div className="border-right"></div>
        <div className="border-bottom"></div>
        <div className="border-left"></div>
    </button>
);

export default AnimatedBorderButton;