import React from "react";
import images from "./images";
import "./gallery.css";
import { Gallery } from "react-grid-gallery";

// const Gallery = () => {
//     return (
//         <div className="gallery">
//             {images.map((image, index) => (
//             <div
//                 key={image.title}
//                 className={`gallery-item gallery-item-${index + 1}`}
//                 style={{ width: `${image.width}px`, height:`${image.height}px`, backgroundColor: `${image.backgroundColor}` }}
//             >
//                 <img
//                     alt={image.title}
//                     className="gallery-img"
//                 />
//             </div>
//         ))}
//     </div>
// );
// }
const GridGallery = () => {
    return (
        <div className="gallery-container">
            <Gallery images={images} rowHeight={220} margin={4}/>
        </div>
    );
}

export default GridGallery;