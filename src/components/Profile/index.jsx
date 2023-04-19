import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import './style.scss';


import Statistics from './Statistics/Statistics';
import MyProfile from './MyProfile/MyProfile';
import MyCreations from './MyCreations/MyCreations';
import MyFavorites from './MyFavorites/MyFavorites';
import MyDownloads from './MyDownloads/MyDownloads';

const Profile = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [activeComponent, setActiveComponent] = useState('myProfile');
    const [mainComponent, setMainComponent] = useState(<MyProfile />);
    const roles = useSelector((state) => state.auth.roles);
    const isCreator = useState(false);
    const identifier = useSelector((state) => state.auth.id);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 

    const dispatch = useDispatch();

    const handleShowModal = () => {
        console.log("click");
        setShowLoginModal(true);
    };

    const handleSetActiveComponent = (componentName) => {
        setActiveComponent(componentName);
        const links = document.querySelectorAll('aside li a');
        links.forEach((link) => {
            link.classList.remove('selected');
        });

        const selectedLink = document.querySelector(`.${componentName}`);
        selectedLink.classList.add('selected');

        console.log(selectedLink);
    };

    const handleLogout = () => {
        dispatch(logout());
        window.location.href('/');
    };

    useEffect(() => {
        setMainComponent(renderActiveComponent());
    }, [activeComponent]);

    const showRole = () => {
        console.log("role", identifier);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'statistics':
                return <Statistics />;
            case 'myProfile':
                return <MyProfile />;
            case 'myCreations':
                return <MyCreations />;
            case 'myFavorites':
                return <MyFavorites />;
            case 'myDownloads':
                return <MyDownloads />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <div>
            <Header onShowModal={handleShowModal} />
            <div className="profile-container">
                <aside>
                    <div className='profile-menu'>
                        <ul>
                            <li>
                                <Link to='#' onClick={() => handleSetActiveComponent('myProfile')} className="myProfile selected">Mon profil</Link>
                            </li>
                            {roles.includes('ROLE_CREATOR') && (
                                <li>
                                    <Link to='#' onClick={() => handleSetActiveComponent('myCreations')} className="myCreations">Mes créations</Link>
                                </li>
                            )}
                            {roles.includes('ROLE_CREATOR') && (
                                <li>
                                    <Link to='#' onClick={() => handleSetActiveComponent('statistics')} className="statistics">Statistiques</Link>
                                </li>
                            )}
                            <li>
                                <Link to='#' onClick={() => handleSetActiveComponent('myFavorites')} className="myFavorites">Mes favoris</Link>
                            </li>
                            <li>
                                <Link to='#' onClick={() => handleSetActiveComponent('myDownloads')} className="myDownloads">Downloads</Link>
                            </li>
                            <li>
                                <Link to='#' onClick={handleLogout}>Déconnexion</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main>
                    {mainComponent}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
