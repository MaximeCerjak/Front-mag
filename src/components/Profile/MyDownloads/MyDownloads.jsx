import React, { useState } from 'react';
import './MyDownloads.scss';
import Folder from './Folder';

const MyDownloads = () => {
    const dummyData = [
        {
            type: 'folder',
            name: 'Folder 1',
            content: [
                {
                type: 'folder',
                name: 'Subfolder 1',
                content: [
                    {
                        type: 'file',
                        name: 'File 1.txt',
                    },
                ],
                },
                {
                    type: 'file',
                    name: 'File 2.txt',
                },
            ],
        },
        {
            type: 'file',
            name: 'File 3.txt',
        },
    ];

    const filesFixtures = [
        {
            name: 'File 1.txt',
            content: 'Hello world',
        },
        {
            name: 'File 2.txt',
            content: 'Hello world',
        },
        {
            name: 'File 3.txt',
            content: 'Hello world',
        },
    ];

    const [editing, setEditing] = useState(null);
    const [currentFolder, setCurrentFolder] = useState(dummyData);
    const [path, setPath] = useState([]);

    const handleFolderClick = (folder) => {
        setPath([...path, folder.name]);
        setCurrentFolder(folder.content);
    };

    const handleDoubleClick = (e, index) => {
        e.preventDefault();
        setEditing(index);
    };
    
    const handleBlur = () => {
        setEditing(null);
    };
    
    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(item));
    };
    
    const handleDrop = (e, target) => {
        e.preventDefault();
        const item = JSON.parse(e.dataTransfer.getData("text/plain"));
        // Gérer le déplacement de l'élément vers le dossier cible
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleGoBack = () => {
        if (path.length === 0) return;
    
        const newPath = [...path];
        newPath.pop();
        setPath(newPath);
    
        let folder = dummyData;
        newPath.forEach((folderName) => {
            folder = folder.find((item) => item.name === folderName).content;
        });
        setCurrentFolder(folder);
    };

    const handleCreateFolder = () => {
        const newFolderName = `New Folder ${Math.floor(Math.random() * 1000)}`;
        setCurrentFolder([
            ...currentFolder,
            {
            type: 'folder',
            name: newFolderName,
            content: [],
            },
        ]);
    };

    const folders = [
        { id: 1, name: "Folder 1" },
        { id: 2, name: "Folder 2" },
    ];
    
    const files = [
        { id: 1, name: "File 1" },
        { id: 2, name: "File 2" },
    ];

    return (
        <div className="file-manager">
            <button onClick={handleGoBack}>Go back</button>
            <button onClick={handleCreateFolder}>Create new folder</button>
            <div className="path">{path.join(' > ')}</div>
            <div className="items">
                {currentFolder.map((item, index) => {
                if (item.type === 'folder') {
                    return (
                        <Folder
                            key={index}
                            item={item}
                            index={index}
                            onOpen={handleFolderClick}
                            onEdit={(folder, newName) => {
                            // Ici, mettez à jour le nom du dossier avec la nouvelle valeur
                            // N'oubliez pas de mettre à jour la base de données également
                            }}
                            onStartDrag={handleDragStart}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        />
                    );
                } else {
                    return (
                        <div
                            key={index}
                            className="item"
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                        >
                            <div className="icon">📄</div>
                            <div className="name">{item.name}</div>
                        </div>
                    );
                }
                })}
            </div>
        </div>
    );
};

export default MyDownloads;