import React from 'react';
import '../MyCreations/MyCreations.scss';
import Gallery from '../gallery/Gallery';

const MyFavorites = () => {

    const dummyData = [
        // Remplacez ceci par les données réelles de vos créations (images, vidéos, audios)
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
    ];


    return (
        <div className="my-creations">
            <h1>Mes favoris</h1>
            <Gallery title="Mes images" items={dummyData} depot="false"/>
            <Gallery title="Mes vidéos" items={dummyData} depot="false"/>
            <Gallery title="Mes audios" items={dummyData} depot="false"/>
        </div>
    );
};

export default MyFavorites;
