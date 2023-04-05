import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-white-mag.png';
import userIo from '../../assets/users.png';
import Menu from '../Menu/Menu'; // import du composant Menu

const Header = ({ onShowModal }) => {
    const [scroll, setScroll] = useState(false);
    const [isWiggling1, setWiggling1] = useState(false);
    const [isWiggling2, setWiggling2] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleClick1 = () => {
        setWiggling1(!isWiggling1);
        onShowModal('signup');
    };

    const handleClick2 = () => {
        setWiggling2(!isWiggling2);
        onShowModal('login');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (
        <header className={scroll ? "fixed" : ""}>
            <div className={scroll ? "disabled" : "header-top"}>
                <div className="header-left">
                    <p className="logo-container">
                        <img src={logo} className="logo" />
                    </p>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-row">
                            <li className="mr-6"><a href="#">Accueil</a></li>
                            <li className="mr-6"><a href="#">À Propos</a></li>
                            <li className="mr-6"><a href="#">Services</a></li>
                            <li className="mr-6"><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <div>
                        {isAuthenticated ? (
                            <div>
                                <span className='orangeMashFont'>Dépôt</span>
                                <span style={{color:"white"}}> | </span>
                                <span className='orangeMashFont' onClick={handleLogout}>
                                    Déconnexion
                                </span>
                            </div>
                        ) : (
                            <span className='orangeMashFont' onClick={handleClick2}>
                                Se connecter
                            </span>
                        )}
                    </div>
                    <img src={userIo} alt="Utilisateur" className={`icon  ${isWiggling1 ? 'wiggle' : ''}`} onClick={handleClick2} />
                </div>
            </div>
            {scroll ?
                <div className='hb-display pb-1'>
                    <div className="sidem-btn-pos">
                        <div type="button">
                            <Menu />
                        </div>
                    </div>
                    <p className="logo-sm-container">
                        <img src={logo} className="logo-sm" />
                    </p>
                    <input type="text" placeholder="Rechercher" className="search-bar" />
                    <div className="header-right hr-pos">
                        <div>
                            {isAuthenticated ? (
                                <div>
                                    <span className='orangeMashFont'>Dépôt</span>
                                    <span>|</span>
                                    <span className='orangeMashFont' onClick={handleLogout}>
                                        Déconnexion
                                    </span>
                                </div>
                            ) : (
                                <span className='orangeMashFont' onClick={handleClick2}>
                                    Se connecter
                                </span>
                            )}
                        </div>
                        <img src={userIo} alt="Utilisateur" className={`icon  ${isWiggling1 ? 'wiggle' : ''}`} onClick={handleClick2} />
                    </div>
                </div> :
                <div className='header-bottom'>
                    <div className="side-menu-btn">
                        <div type="button">
                            {/* Utilisation du composant Menu ici */}
                            <Menu />
                        </div>
                    </div>
                    <input type="text" placeholder="Rechercher" className="search-bar" />
                </div>
            }
        </header>
    );
};

export default Header;




