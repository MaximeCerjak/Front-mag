import React, { useState } from 'react';
import api from '../../api/api';
import './style.scss';
import AnimatedBorderButton from '../Buttons/AnimatedBorderBtn';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifiedPass, setVerifiedPass] = useState('');
    const [name, setName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [typeUser, setTypeUser] = useState('user');

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cgu = document.getElementById('cgu').checked;

        if (!cgu) {
            alert('Vous devez accepter les conditions générales d\'utilisation');
            return;
        }

        if (password !== verifiedPass) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        try {
            const response = await api.post('/api/user/create', { email, password, name, pseudo, typeUser });
            window.location.href = '/';
            alert('Inscription réussie')
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
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
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        autoComplete='off'
                    />
                </div>
            </div>
            <div className="form-group pass-block">
                <div className="input-field pass-enter">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=""
                        autoComplete='off'
                    />
                </div>
                <div className="input-field pass-confirm">
                    <label htmlFor="password-confirm">Confirmer le mot de passe</label>
                    <input
                        type="password"
                        id="password-confirm"
                        value={verifiedPass}
                        onChange={(e) => setVerifiedPass(e.target.value)}
                        placeholder=""
                        autoComplete="off"
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
