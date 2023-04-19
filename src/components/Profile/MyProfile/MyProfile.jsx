import React from 'react';
import './MyProfile.scss';

const MyProfile = () => {
    return (
        <div className="my-profile">
            <div className="avatar-container">
                <img
                src="https://via.placeholder.com/150" // Remplacez par l'image de profil de l'utilisateur ou par une image par défaut
                alt="Avatar"
                className="avatar"
                />
            </div>
            <div className="info-container">
                <h1>Informations personnelles</h1>
                <p>Nom: John Doe</p>
                <p>Email: john.doe@example.com</p>
                <button className="edit-info">Modifier les informations</button>
                <button className="change-password">Changer le mot de passe</button>
            </div>
        </div>
    );
};

export default MyProfile;
