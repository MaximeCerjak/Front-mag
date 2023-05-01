import React, { useState, useEffect } from 'react';
import './Gallery.scss';

const Gallery = ({ title, items, depot, handleSetActiveComponent }) => {
    const [plainItems, setPlainItems] = useState(false);
    const [displayedItems, setDisplayedItems] = useState([]);

    useEffect(() => {
        setDisplayedItems(items.slice(0, 5));
    }, [items]);

    const handleShowMore = () => {
        if(plainItems) {
            setDisplayedItems(items.slice(0, 5));
            setPlainItems(false);
        } else {
            setDisplayedItems(items);
            setPlainItems(true);
        }
    };

    const goToUploadForm = () => {
        handleSetActiveComponent('resourceDeposit');
    };

    const isUrl = (str) => {
        const regex = new RegExp(
            '^(https?:\\/\\/)?' + // protocole
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // nom de domaine
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OU une adresse IP
            '(\\:\\d+)?' + // port optionnel
            '(\\/[-a-z\\d%_.~+]*)*' + // partie chemin
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // chaîne de requête optionnelle
            '(\\#[-a-z\\d_]*)?$',
            'i'
        );
    
        return !!regex.test(str);
    };

    return (
        <div className="gallery-section gallery-container">
            <div className="gallery-header">
                <h2>{title}</h2>
                {
                    depot === "true" ? <button className="upload" onClick={() => goToUploadForm(title)}>Dépôt</button> : null
                }
            </div>
            <div className="gallery">
                {displayedItems.map((item, index) => (
                    <div key={index} className="gallery-item" style={{ "--background-image" : `url(${item})`}}>
                        {isUrl(item) ? null : <p>{item}</p> }                
                    </div>
                ))}
            </div>
            <button className="show-more" onClick={handleShowMore}>Voir plus</button>
        </div>
    );
};

export default Gallery;

