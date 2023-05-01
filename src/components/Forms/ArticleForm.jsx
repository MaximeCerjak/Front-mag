import { Editor } from '@tinymce/tinymce-react';
import React, { useState, useRef, useEffect } from 'react';
import { table, table2 } from './tables';
import api from '../../api/api';

const ArticleForm = () => {
    const [editorContent, setEditorContent] = useState('');
    const tinyKey = import.meta.env.VITE_TINY_KEY;
    const [articleCategories, setArticleCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    const fetchCategories = async () => {
        try {
            const response = await api.get('/api/category/article');
            console.log(response.data);
            setArticleCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleEditorChange = (content, editor) => {
        setEditorContent(content);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Soumettez les données du formulaire, y compris editorContent, à votre API pour enregistrement en base de données
    };

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titre de l'article</label>
            <input type="text" id="title" name="title" placeholder="Titre de l'article" />
            <label htmlFor="coverImage">Image de couverture</label>
            <input type="file" id="coverImage" name="coverImage" />
            <label htmlFor="category">Catégorie</label>
            <select name="category" id="category">
                <option value="">Choisissez une catégorie...</option>
                {articleCategories.map(category => (
                    <option value={category.id}>{category.name}</option>
                ))}
            </select>
            <label htmlFor="newCategory">Nouvelle catégorie (si aucune catégorie ne correspond)</label>
            <input
            type="text"
            id="newCategory"
            name="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Nom de la nouvelle catégorie"
            />
            <Editor
                apiKey={tinyKey}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="Créez içi le contenu de votre article"
                init={{
                    selector: 'textarea#classic',
                    width: '100%',
                    height: '60vh',
                    resize: false,
                    autosave_ask_before_unload: false,
                    powerpaste_allow_local_images: true,
                    plugins: [
                        'a11ychecker', 'advcode', 'advlist', 'anchor', 'autolink', 'codesample', 'fullscreen', 'help',
                        'image', 'editimage', 'tinydrive', 'lists', 'link', 'media', 'powerpaste', 'preview',
                        'searchreplace', 'table', 'template', 'tinymcespellchecker', 'visualblocks', 'wordcount'
                    ],
                    templates: [
                        {
                        title: 'Non-editable Example',
                        description: 'Non-editable example.',
                        content: table
                        },
                        {
                        title: 'Simple Table Example',
                        description: 'Simple Table example.',
                        content: table2
                        }
                    ],
                    toolbar: 'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
                    spellchecker_dialog: true,
                    spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
                    tinydrive_demo_files_url: '../_images/tiny-drive-demo/demo_files.json',
                    tinydrive_token_provider: (success, failure) => {
                        success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
                    },
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                }}
            />
            <button type="submit" className='article-form-btn'>Enregistrer l'article</button>
        </form>
    );
};

export default ArticleForm;

