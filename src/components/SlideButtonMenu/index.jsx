import React from 'react';
import SlideButton from '../SlideButton';
import ResourceCatSlider from '../ResourceCatSlider';
import { useState } from 'react';
import './SlideButtonMenu.scss'

const SlideButtonMenu = () => {
    const [activeCategory, setActiveCategory] = useState('Image');

    const handleSlideChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <div className='slide-button-menu-container'>
            <div className='center-div-text'>
                <p>
                    Formez vous <span className='strong-orange'>GRATUITEMENT</span>!
                </p>
                <p>
                    <span className='strong-orange'>Choisissez</span> le domaine.
                </p>
            </div>
            <div className='slideButtonMenu'>
                <SlideButton
                    imageSrc="../slidebtn-image.png"
                    altText="Image"
                    onChange={handleSlideChange}
                    checked={activeCategory === 'Image'}
                />
                <SlideButton
                    imageSrc="../slidebtn-video.png"
                    altText="Video"
                    onChange={handleSlideChange}
                    checked={activeCategory === 'Video'}
                />
                <SlideButton
                    imageSrc="../slidebtn-typo.png"
                    altText="Typo"
                    onChange={handleSlideChange}
                    checked={activeCategory === 'Typo'}
                />
                <SlideButton
                    imageSrc="../slidebtn-audio.png"
                    altText="Audio"
                    onChange={handleSlideChange}
                    checked={activeCategory === 'Audio'}
                />
            </div>
            <ResourceCatSlider activeCategory={activeCategory} />
        </div>
    );
};

export default SlideButtonMenu;