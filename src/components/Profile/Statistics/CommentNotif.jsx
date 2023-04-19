import React, { useState, useEffect} from 'react';
import './CommentNotif.scss';

const CommentNotification = ({ commentCount, onClick, letter }) => {
    const [animationClass, setAnimationClass] = useState('');

    const animations = ['wiggle', 'bounce'];

    useEffect(() => {
        const changeAnimation = () => {
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        setAnimationClass(randomAnimation);
    };
    
        const interval = setInterval(() => {
            changeAnimation();
        }, 5000); // Changer l'animation toutes les 5 secondes
    
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="comment-notification" onClick={onClick}>
            <div className="resource-icon">{letter}</div>
            <div className={`comment-count ${animationClass}`}>{commentCount}</div>
        </div>
    );
};

export default CommentNotification;
