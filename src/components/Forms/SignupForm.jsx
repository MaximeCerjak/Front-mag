import React, { useState } from 'react';
import api from '../../api/api';
import './style.scss';
import AnimatedBorderButton from '../Buttons/AnimatedBorderBtn';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [pseudo, setPseudo] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/api/user/create', { email, password, name, pseudo });
            // Traitez la réponse de l'API (par exemple, enregistrez le token d'authentification, redirigez vers une autre page, etc.)
            console.log('Inscription réussie:', response.data);
        } catch (error) {
            // Gérez les erreurs (par exemple, affichez un message d'erreur)
            console.error('Erreur lors de l\'inscription:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form" autoComplete="off">
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
