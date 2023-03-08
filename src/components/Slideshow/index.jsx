import React, { useEffect, useState } from "react";
import axios from "axios";

function Slideshow() {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);
    const delay = 2500;

    const getImages = async () => {
        const response = await axios.get("http://localhost:8000/picture");
        return response.data;
    };

    const moveFirstImageToEnd = () => {
        if( images.length > 0 ) {
            const firstImage = images.shift();
            setImages([...images, firstImage]);
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            const data = await getImages();
            setImages(data);
            console.log(images);
        };
        fetchImages();
    }, []);

    useEffect(() => {
        setTimeout(
            () =>
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
        console.log(images);
        moveFirstImageToEnd();
        return () => {};
    }, [index]);

    return (
        <div className="slideshow">
        <div className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 200}px, 0, 0)` }}
        >
            {images.map((image, index) => (
                image && (
                    <img
                        className="slide"
                        key={index}
                        src={image.url}
                        alt={image.title}
                    ></img>
                )  
            ))}
        </div>
        </div>
    );
}

export default Slideshow;