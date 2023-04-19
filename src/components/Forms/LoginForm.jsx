import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';
import './style.scss';
import AnimatedBorderButton from '../Buttons/AnimatedBorderBtn';

const LoginForm = ({handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(email, password));
        handleClose();
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
