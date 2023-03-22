import React, { useState } from 'react';
import SignupForm from '../../Forms/SignupForm';
import './style.scss';

const SignupModal = ({ showModal, onCloseModal }) => {
    const [animOn, setAnimOn] = useState(false); // Etat de l'animation

    const handleClose = () => {
        setAnimOn(true); // Déclenche l'animation
        setTimeout(() => {
            onCloseModal();
            setAnimOn(false); // Réinitialise l'état de l'animation
        }, 800); // Appel de la fonction onClose après la fin de l'animation (2s)
    };

    return (
        <div className={`backdrop ${showModal ? 'backdrop-show' : ''}`}>
            <div className={`modal ${showModal ? '' : 'modal-closed'} ${animOn ? 'modal-anim' : ''}`}>
                <div className="close-icon" onClick={handleClose}>
                    <svg viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </div>
                <div className="modal-content">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};

export default SignupModal;