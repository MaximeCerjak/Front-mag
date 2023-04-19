import React, { useState } from 'react';
import Slideshow from '../Slideshow';
import Intro from '../Intro';
import Gallery from '../Gallery';
import SlideNews from '../SlideNews';

const Home = () => {
    
    return (
        <div>
            <Slideshow />
            <Intro/>
            <Gallery />
            <SlideNews />
        </div>
    );
};

export default Home;