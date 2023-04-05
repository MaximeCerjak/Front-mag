import React, { useState } from 'react';
import api from '../../api/api';
import './style.scss';
import AnimatedBorderButton from '../Buttons/AnimatedBorderBtn';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/api/login_check', { email, password });
            // Enregistrer le token dans le localStorage
            localStorage.setItem('token', response.data.token);
            // Rediriger l'utilisateur vers la page d'accueil
            window.location.href = '/';
        } catch (error) {
            // Gérez les erreurs (par exemple, affichez un message d'erreur)
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
            <div className="triangle-leftUp"></div>
            <div className="triangle-rightUp"></div>
            <h2>Connexion</h2>
            <div className="form-group">
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
            </div>
            <div className="login-send">
                <AnimatedBorderButton text="Se connecter" />
            </div>
        </form>
    );
};

export default LoginForm;
