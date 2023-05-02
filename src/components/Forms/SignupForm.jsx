import React, { useState } from 'react';
import api from '../../api/api';
import './style.scss';
import AnimatedBorderButton from '../Buttons/AnimatedBorderBtn';

const SignupForm = ({closeModal}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifiedPass, setVerifiedPass] = useState('');
    const [name, setName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [typeUser, setTypeUser] = useState('user');
    const [errorMessage, setErrorMessage] = useState('');
    const [notSimilarError, setNotSimilarError] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleTypeUser = (e) => {
        e.preventDefault();
        setTypeUser(e.target.value);

        if (e.target.value === 'user') {
            document.querySelector('.typeUser-btn-left').classList.add('active');
            document.querySelector('.typeUser-btn-right').classList.remove('active');
        } else if (e.target.value === 'creator') {
            document.querySelector('.typeUser-btn-left').classList.remove('active');
            document.querySelector('.typeUser-btn-right').classList.add('active');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
        setErrorMessage('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(false);
        setNotSimilarError('');
    };

    const handleVerifiedPasswordChange = (e) => {
        setVerifiedPass(e.target.value);
        setPasswordError(false);
        setNotSimilarError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cgu = document.getElementById('cgu').checked;

        if (!cgu) {
            alert('Vous devez accepter les conditions générales d\'utilisation');
            return;
        }

        if (password !== verifiedPass) {
            setPasswordError(true);
            setNotSimilarError('Les mots de passe ne sont pas identiques');
            return;
        } else if (password.length < 8) {
            setPasswordError(true);
            setNotSimilarError('Le mot de passe doit contenir au moins 8 caractères');
            return;
        }

        try {
            const response = await api.post('/api/user/create', { email, password, name, pseudo, typeUser });
            closeModal();
            alert('Inscription réussie')
        } catch (error) {
            if (error.response && error.response.status === 500 && error.response.data && error.response.data.detail.includes("Integrity constraint violation: 1062 Duplicate entry")) {
                setEmailError(true);
                setErrorMessage("L'adresse e-mail est déjà utilisée. Veuillez en choisir une autre.");
            } else {
                setErrorMessage("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form" autoComplete="off">
            <div className="typeUser">
                <button type="checkbox" className="typeUser-btn typeUser-btn-left active" value="user" onClick={handleTypeUser}>Compte usager</button>
                <button type="checkbox" className="typeUser-btn typeUser-btn-right" value="creator" onClick={handleTypeUser}>Compte créateur</button>
            </div>
            <div className="triangle-leftUp"></div>
            <div className="triangle-rightUp"></div>
            <h2>Inscription</h2>
            <div className="form-group">
                <div className="input-field">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input
                        type="text"
                        id="pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                        placeholder=""
                        autoComplete='off'
                    />
                </div>
                <div className={`input-field ${emailError ? 'error' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder=""
                        autoComplete='off'
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            </div>
            <div className="form-group pass-block">
                <div className={`input-field pass-enter ${passwordError ? 'error' : ''}`}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder=""
                        autoComplete='off'
                        style={passwordError ? { borderColor: 'red' } : {}}
                    />
                    {notSimilarError && <div className="error-message">{notSimilarError}</div>}
                </div>
                <div className={`input-field pass-confirm ${passwordError ? 'error' : ''}`}>
                    <label htmlFor="password-confirm">Confirmer le mot de passe</label>
                    <input
                        type="password"
                        id="password-confirm"
                        value={verifiedPass}
                        onChange={handleVerifiedPasswordChange}
                        placeholder=""
                        autoComplete="off"
                        style={passwordError ? { borderColor: 'red' } : {}}
                    />
                </div>
            </div>
            <div className="cgu-send">
                <div className='cgu-block'>
                    <input type="checkbox" id="cgu" name="cgu" value="cgu" />
                    <label htmlFor="cgu">
                        En cochant cette case je reconnais avoir pris connaissance de la politique de confidentialité et des conditions générales d'utilisation de Mash Art Graphic.
                    </label>
                </div>
                <AnimatedBorderButton text="S'inscrire" />
            </div>
        </form>
    );
};

export default SignupForm;
