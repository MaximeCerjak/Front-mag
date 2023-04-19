import React, { useState, useEffect } from "react";
import categories from "./categories";

const types = ["TYPO", "AUDIO", "VIDEO", "PHOTO", "GIF", "3D"];

const SlideNews = () => {
    const [typesArr, setTypesArr] = useState(types);

    const handleClickLeft = () => {
        setTypesArr((prevArray) => {
            const newArray = prevArray.slice();
            const lastImg = newArray.pop();
            return [lastImg, ...newArray];
        });
    };

    const handleClickRight = () => {
        setTypesArr((prevArray) => {
            const newArray = prevArray.slice();
            const firstImg = newArray.shift();
            return [...newArray, firstImg];
        });
    };

    

    
    return (
        <div className="slide-news">
            <h2>Les nouveautés</h2>
            <div className="slider-type">
                <div className="arrow-left" onClick={handleClickLeft}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="slide-news-container">
                    {typesArr.map((type, index) => (
                        <div className="bg-item">
                            <div key={index} className={ index == 1 ? "slide-news-item selected" : "slide-news-item"} onClick={index < 1 ? handleClickLeft : handleClickRight}>
                                {type}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrow-right" onClick={handleClickRight}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div>
                {categories.map((category, index) => (
                    <div key={`${category}-${index}`}>
                        {category.images.map((item, index) => (
                            <span key={`${index}-img`}>
                                <img src={item.src} alt="image" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SlideNews;
