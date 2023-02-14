import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import userIo from '../../assets/users.png';
import pocketCase from '../../assets/case.png';

const Header = () => {
    const [ scroll, setScroll ] = useState(false)
    const [isWiggling1, setWiggling1] = useState(false);
    const [isWiggling2, setWiggling2] = useState(false);

    const handleClick1 = () => {
        setWiggling1(!isWiggling1);
    };

    const handleClick2 = () => {
        setWiggling2(!isWiggling2);
    };



    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (
        <header className={ scroll ? "fixed" : ""}>
            <div className={scroll ? "disabled" : "header-top"}>
                <div className="header-left">
                    <img src={logo} className="logo" />
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
                        <span className='orangeMashFont'>Dépôt</span><span> | </span><span className='orangeMashFont'>Se connecter</span>
                    </div>
                    <img src={userIo} alt="Utilisateur" className={`icon  ${isWiggling1 ? 'wiggle' : ''}`} onClick={handleClick1} />
                </div>
            </div>
            { scroll ? 
                <div className='hb-display pb-1'>
                    <div className="sidem-btn-pos">
                        <div type="button">
                            <img src={pocketCase} className={`icon-menu  ${isWiggling2 ? 'wiggle' : ''}`} onClick={handleClick2} />
                        </div>
                    </div>
                    <img src={logo} className="logo-sm" />
                    <input type="text" placeholder="Rechercher" className="search-bar" />
                    <div className="header-right">
                        <div>
                            <span className='orangeMashFont'>Dépôt</span><span> | </span><span className='orangeMashFont'>Se connecter</span>
                        </div>
                        <img src={userIo} alt="Utilisateur" className={`icon  ${isWiggling1 ? 'wiggle' : ''}`} onClick={handleClick1}/>
                    </div>
                </div> :
                <div className='header-bottom'>
                    <div className="side-menu-btn">
                        <div type="button">
                            <img src={pocketCase} className={`icon-menu  ${isWiggling2 ? 'wiggle' : ''}`} onClick={handleClick2} />
                        </div>
                    </div>
                    <input type="text" placeholder="Rechercher" className="search-bar" />
                </div>
            }
        </header>
    );
};

export default Header;
