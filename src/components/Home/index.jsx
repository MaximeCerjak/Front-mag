import React, { useState } from 'react';
import Slideshow from '../Slideshow';
import Intro from '../Intro';
import Gallery from '../Gallery';
import SlideButtonMenu from '../SlideButtonMenu';
import Search from '../Search';
import './home.scss';

const Home = () => {
    
    return (
        <div>
            <Slideshow />
            <SlideButtonMenu />
            <Search />
            <Intro />
            <Gallery />
        </div>
    );
};

export default Home;