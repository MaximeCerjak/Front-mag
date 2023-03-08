import React, { useEffect, useState, useRef } from "react";
import images from "./images";
import { CSSTransition } from "react-transition-group";

const Slideshow = () => {
    const [currentIndex, setIndex] = useState(0);
    const [ imgArray, setNewArray ] = useState(images); 

    const slide = document.querySelector('.slide');
    const [slideHeight, setSlideHeight] = useState(0);
    console.log(slide);
    // const [slideWidth, setSlideWidth] = useState(slide.style.width);
    const ratio = 0.75; // ratio hauteur/largeur

    useEffect(() => {
        const slide = document.querySelector('.slide');
        console.log(slide);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setNewArray((prevArray) => {
                const newArray = prevArray.slice();
                const firstImg = newArray.shift();
                return [...newArray, firstImg];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [imgArray]);

    return (
        <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translateX(-${currentIndex * 20}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {imgArray.map((image, index) => (
                image && (
                <CSSTransition
                    key={image.title}
                    classNames="slide"
                    timeout={{ enter: 500, exit: 500 }}
                >
                <div className="slide">
                    <div className="picture-container">
                    <img
                        src={image.src}
                        key={index}
                        alt={image.title}
                    ></img>
                    </div>
                </div> 
                </CSSTransition>   
                )  
            ))}
        </div>
        </div>
    );
}

export default Slideshow;