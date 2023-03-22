import React, { useState } from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import SlideNews from './components/SlideNews';
import SignupModal from './components/Modals/Signup/SignupModal';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        console.log("click");
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Header onShowModal={handleShowModal} />
            <Slideshow />
            <Intro/>
            <Gallery />
            <SlideNews />
            <SignupModal showModal={showModal} onCloseModal={handleCloseModal} />
        </div>
    );
};

export default App;