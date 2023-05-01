import React from "react";

const ArticleTemplate = ({ title, coverImage, intro, content, author }) => {
    return (
        <article className="article-template">
            <img src={coverImage} alt={title} className="article-cover-image" />
            <h1>{title}</h1>
            <p className="article-intro">{intro}</p>
            <div className="article-content">{content}</div>
            <div className="article-author">
            <img src={author.profilePicture} alt={author.name} className="author-profile-picture" />
            <div className="author-info">
                <h4>{author.name}</h4>
                <p>{author.bio}</p>
            </div>
            </div>
        </article>
    );
};
