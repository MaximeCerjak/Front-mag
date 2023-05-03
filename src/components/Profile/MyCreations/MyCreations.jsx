import React from 'react';
import './MyCreations.scss';
import Gallery from '../gallery/Gallery';
import api from '../../../api/api';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyCreations = ({handleSetActiveComponent}) => {
    const [pictures, setPictures] = useState([]);
    const [videos, setVideos] = useState([]);
    const [audios, setAudios] = useState([]);
    const [typos, setTypos] = useState([]);

    const accessToken = localStorage.getItem('token');

    const userId = useSelector(state => state.auth.id);

    useEffect(() => {
        const fetchPictures = async () => {
            try {
                const response = await api.get(`/api/pictures/user/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                setPictures(response.data);
                console.log(pictures);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPictures();
    }, [accessToken]);


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

    const itemsPicture = [];

    for (let i = 0; i < pictures.length; i++) {
        itemsPicture[i] = `https://mash-api.herokuapp.com${pictures[i].pic_url}`; 
    }

    console.log(itemsPicture);


    return (
        <div className="my-creations">
            <h1>Mes créations</h1>
            <Gallery title="Mes images" items={itemsPicture} depot="true" handleSetActiveComponent={handleSetActiveComponent}/>
            <Gallery title="Mes vidéos" items={dummyData} depot="true" handleSetActiveComponent={handleSetActiveComponent}/>
            <Gallery title="Mes audios" items={dummyData} depot="true" handleSetActiveComponent={handleSetActiveComponent}/>
        </div>
    );
};

export default MyCreations;
