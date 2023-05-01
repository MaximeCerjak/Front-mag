import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo-white-mag.png';
import userIo from '../../assets/users.png';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { useLocation } from 'react-router-dom';
import './Header.scss';

const Header = ({ onShowModal }) => {
    const [scroll, setScroll] = useState(false);
    const [isWiggling, setWiggling] = useState(false);
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();


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

    const handleProfileIconClick = () => {
        if (isAuthenticated) {
            setShowDropdown(!showDropdown);
        } else {
            handleClick();
        }
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    const navigateTo = (path) => {
        navigate(path);
        setShowDropdown(false);
    };

    useEffect(() => {

        if(location.pathname === '/profile') {
            return;
        }
        
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
                        {isAuthenticated ? null : (
                            <span className='orangeMashFont' onClick={handleClick}>
                                Se connecter
                            </span>
                        )}
                    </div>
                    <img src={userIo} alt="Utilisateur" className="icon" onClick={handleProfileIconClick} />
                    {isAuthenticated && showDropdown && (
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={() => navigateTo('/profile')}>Mon profil</li>
                                {/* Vous pouvez ajouter une condition pour vérifier si l'utilisateur est un créateur */}
                                <li onClick={() => navigateTo('/depots')}>Mes dépôts</li>
                                <li onClick={() => navigateTo('/ressources')}>Mes ressources</li>
                                <li onClick={handleLogout}>Déconnexion</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {scroll ?
                <div className='hb-display pb-1'>
                    <p className="logo-sm-container">
                        <img src={logo} className="logo-sm" />
                    </p>
                    <input type="text" placeholder="Rechercher" className="search-bar" />
                    <div className="header-right hr-pos">
                        <div>
                            {isAuthenticated ? null : (
                                <span className='orangeMashFont' onClick={handleClick}>
                                    Se connecter
                                </span>
                            )}
                        </div>
                        <img src={userIo} alt="Utilisateur" className="icon" onClick={handleClick} />
                    </div>
                </div> :
                <div className='header-bottom'>
                    <input type="text" placeholder="Rechercher" className="search-bar" />
                </div>
            }
        </header>
    );
};

export default Header;




