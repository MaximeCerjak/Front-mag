import React, { useState, useEffect } from 'react';
import './Gallery.scss';

const Gallery = ({ title, items, depot }) => {
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

    const goToUploadForm = (title) => {
        console.log(title);
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
                    <div key={index} className="gallery-item">
                        {item}
                    </div>
                ))}
            </div>
            <button className="show-more" onClick={handleShowMore}>Voir plus</button>
        </div>
    );
};

export default Gallery;

