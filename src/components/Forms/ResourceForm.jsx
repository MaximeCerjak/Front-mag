// src/components/ResourceForm.js
import React, { useState } from 'react';
import './ResourceForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import api from '../../api/api';


const ResourceForm = () => {
    const [resourceType, setResourceType] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [allowSharing, setAllowSharing] = useState(false);
    const [file, setFile] = useState(null);
    const [fileSizeErro, setFileSizeError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const maxFileSize = 5 * 1024 * 1024;

    const accessToken = localStorage.getItem('token');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if( selectedFile && selectedFile.size > maxFileSize ){
            setFileSizeError(true);
            setErrorMessage("L'image sélectionnée dépasse la limite autorisé de 5mo");
        } else {
            setFile(e.target.files[0]);
            setFileSizeError(false);
            setErrorMessage("");
        }  
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('pic_title', title);
        formData.append('pic_legend', tags);
        formData.append('crea_description', description);

        // Envoyer la requête POST à votre endpoint
        try {
            const response = await api.post('/api/picture/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            // Réinitialiser le formulaire
            setResourceType('');
            setTitle('');
            setTags('');
            setDescription('');
            setAcceptTerms(false);
            setAllowSharing(false);
            setFile(null);

            // Avertir l'utilisateur que le fichier a été envoyé à l'aide d'une notification
            alert('Votre fichier a été envoyé avec succès !');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="resource-form">
            <p>Connecté en tant que: utilisateur@example.com</p>
            <h2>Dépôt</h2>
            <form onSubmit={handleSubmit}>
                <label>Type de fichier:</label>
                <select value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
                <option value="">Sélectionner</option>
                <option value="video">Vidéo</option>
                <option value="audio">Audio</option>
                <option value="image">Image</option>
                <option value="typo">Fichier de typo</option>
                </select>
                <label htmlFor="file">Fichier :</label>
                <input type="file" id="file" name="file" onChange={handleFileChange} />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                <label>Titre:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Tags:</label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                <label className='check-consent'>
                <input type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} />
                    Consentement conditions générales
                </label>
                <label className='check-consent'>
                <input type="checkbox" checked={allowSharing} onChange={() => setAllowSharing(!allowSharing)} />
                    Autorisation de partage des ressources
                </label>
                <button type="submit" className="submit-btn">
                    <FontAwesomeIcon icon={faCloudDownloadAlt} />
                    <span className="submit-btn-text">Déposer</span>
                </button>
            </form>
        </div>
    );
};

export default ResourceForm;
