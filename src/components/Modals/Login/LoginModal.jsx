import React, { useState } from 'react';
import LoginForm from '../../Forms/LoginForm';
import './style.scss';

const LoginModal = ({ showLoginModal, handleCloseLoginModal, setShowSignupModal }) => {
    const [animOn, setAnimOn] = useState(false); // Etat de l'animation

    const handleShowSignupModal = () => {
        handleClose();
        setShowSignupModal(true);
    };

    const handleClose = () => {
        handleCloseLoginModal();
    };

    return (
        <div className={`backdrop ${showLoginModal ? 'backdrop-show' : ''}`}>
            <div className={`modal ${showLoginModal ? '' : 'modal-closed'} ${animOn ? 'modal-anim' : ''}`}>
                <div className="close-icon" onClick={handleClose}>
                    <svg viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </div>
                <div className="modal-content">
                    <LoginForm handleClose={handleClose}/>
                </div>
                <p>
                Pas encore de compte ?{' '}
                <a href="#" onClick={handleShowSignupModal}>
                        Inscrivez-vous
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;