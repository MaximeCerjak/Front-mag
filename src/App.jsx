import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LoginModal from './components/Modals/Login/LoginModal';
import SignupModal from './components/Modals/Signup/SignupModal';
import Footer from './components/Footer';

const App = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleCloseSignupModal = () => {
        setShowSignupModal(false);
    };

    const handleShowModal = () => {
        console.log("click");
        setShowLoginModal(true);
    };

    return (
        <div>
            <Header onShowModal={handleShowModal} />
            <Home/>
            <LoginModal showLoginModal={showLoginModal} handleCloseLoginModal={handleCloseLoginModal} setShowSignupModal={setShowSignupModal}/>
            <SignupModal showSignupModal={showSignupModal} onCloseModal={handleCloseSignupModal} />
            <Footer />
        </div>
    );
};

export default App;