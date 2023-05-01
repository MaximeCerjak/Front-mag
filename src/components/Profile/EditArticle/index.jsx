import React from "react";
import ArticleForm from "../../Forms/ArticleForm";
import { useSelector } from "react-redux";
import './EditArticle.scss';

const EditArticle = () => {

    return (
        <div className="edit-article-container">
            <ArticleForm/>
        </div>
    );
};

export default EditArticle;