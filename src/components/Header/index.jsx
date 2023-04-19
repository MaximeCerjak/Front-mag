import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-white-mag.png';
import userIo from '../../assets/users.png';
import Menu from '../Menu/Menu'; // import du composant Menu
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Header = ({ onShowModal }) => {
    const [scroll, setScroll] = useState(false);
    const [isWiggling, setWiggling] = useState(false);
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const handleClick = () => {
        if(isAuthenticated) {
            console.log("isAuthenticated redirect to profile")
            navigate('/profile');
        } else {
            setWiggling(!isWiggling);
            onShowModal('login');
        }
        
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
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

    const showIsAuthenticated = () => {
        console.log("isAuthenticated", isAuthenticated)
    }

    return (
        <header className={scroll ? "fixed" : ""}>
            <div className={scroll ? "disabled" : "header-top"}>
                <div className="header-left">
                    <p className="logo-container">
                        <img src={logo} className="logo" onClick={showIsAuthenticated}/>
                    </p>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-row">
                            <Link to="/"><li className="mr-6"><a href="#">Accueil</a></li></Link>
                            <Link to="/about"><li className="mr-6"><a href="#">À Propos</a></li></Link>
                            <Link to="/services"><li className="mr-6"><a href="#">Services</a></li></Link>
                            <Link to="/contact"><li className="mr-6"><a href="#">Contact</a></li></Link>
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
                            <span className='orangeMashFont' onClick={handleClick}>
                                Se connecter
                            </span>
                        )}
                    </div>
                    <img src={userIo} alt="Utilisateur" className="icon" onClick={handleClick} />
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
                                <span className='orangeMashFont' onClick={handleClick}>
                                    Se connecter
                                </span>
                            )}
                        </div>
                        <img src={userIo} alt="Utilisateur" className="icon" onClick={handleClick} />
                    </div>
                </div> :
                <div className='header-bottom'>
                    <div className="side-menu-btn">
                        <div type="button">
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




