import React, { useState } from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import SlideNews from './components/SlideNews';
import LoginModal from './components/Modals/Login/LoginModal';
import SignupModal from './components/Modals/Signup/SignupModal';

const App = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleShowModal = () => {
        console.log("click");
        setShowLoginModal(true);
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleCloseSignupModal = () => {
        setShowSignupModal(false);
    };

    return (
        <div>
            <Header onShowModal={handleShowModal} />
            <Slideshow />
            <Intro/>
            <Gallery />
            <SlideNews />
            <LoginModal showLoginModal={showLoginModal} handleCloseLoginModal={handleCloseLoginModal} setShowSignupModal={setShowSignupModal}/>
            <SignupModal showSignupModal={showSignupModal} onCloseModal={handleCloseSignupModal} />
        </div>
    );
};

export default App;