import React, { useState } from 'react';
import './ResourceCatSlider.scss';

const category = [
    {
        id: 1,
        name: 'Image',
        articles:
            [
                {
                    id: 1,
                    title: 'Quels outils pour le graphisme ?',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_0.webp',
                },
                {
                    id: 2,
                    title: 'Effets photoshop : les bases !',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_13.webp',
                },
                {
                    id: 3,
                    title: 'Produire des illustrations pour le web',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_3.webp',
                }
            ]
    },
    {
        id: 2,
        name: 'Video',
        articles:
            [
                {
                    id: 1,
                    title: 'Les problèmes liés à l\'encodage vidéo',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_11.webp',
                },
                {
                    id: 2,
                    title: 'Les bases du montage vidéo sur mobile',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_12.webp',
                },
                {
                    id: 3,
                    title: 'Trouver son logiciel de montage vidéo',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_14.webp',
                }
            ]
    },
    {
        id: 3,
        name: 'Typo',
        articles:
            [
                {
                    id: 1,
                    title: 'Petite histoire de la typographie',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_5.webp',
                },
                {
                    id: 2,
                    title: 'La typographie dans le webdesign',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_6.webp',
                },
                {
                    id: 3,
                    title: 'L\'enluminure comme inspiration typographique',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_7.webp',
                }
            ]
    },
    {
        id: 4,
        name: 'Audio',
        articles:
            [
                {
                    id: 1,
                    title: 'Les bases du montage audio',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_8.webp',
                },
                {
                    id: 2,
                    title: 'S\'équiper pour le montage audio',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_9.webp',
                },
                {
                    id: 3,
                    title: 'Acoustique ou numérique ?',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    imageSrc: '../articles/0_15.webp',
                }
            ]
    }
];

const ResourceCatSlider = ({ activeCategory }) => {
    return (
        <div className="resource-category-slider">
            {category.map((cat, index) => {
                return (
                    <div key={index} className={`slider-container ${cat.name.toLowerCase()}-container ${activeCategory === cat.name ? 'active' : ''}`}>
                        {cat.articles.map((article) => {
                            return (
                                <div key={article.id} className='item-article-category' style={{ "--background-image" : `url(${article.imageSrc})`}}>
                                    <div className='h2-block'>
                                        <h2>{article.title}</h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default ResourceCatSlider;
