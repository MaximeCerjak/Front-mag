import React from 'react';
import './SlideButton.scss';

const SlideButton = ({ imageSrc, altText, onChange, checked }) => {
    return (
        <div className='slide-btn-block'>
            <label className="switch">
                <input type="radio" checked={checked} name="resource-category" value={altText} className="switch hit" onChange={onChange} style={{ "--background-image" : `url(${imageSrc})`}}/>
            </label>
            <span>{altText}</span>
        </div>
    );
};

export default SlideButton;
