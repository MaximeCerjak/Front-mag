import React, { useState } from 'react';
import './MyDownloads.scss';


const Folder = ({ item, index, onOpen, onEdit, onStartDrag, onDrop, onDragOver }) => {
    const [editing, setEditing] = useState(false);

    const handleClick = () => {
        if (!editing) {
            onOpen(item);
        }
    };

    const handleDoubleClick = (e) => {
        e.stopPropagation();
        setEditing(true);
    };

    const handleBlur = (e) => {
        onEdit(item, e.target.value);
        setEditing(false);
    };

    return (
        <div
            className="item"
            onDoubleClick={handleDoubleClick}
            draggable
            onDragStart={(e) => onStartDrag(e, item)}
            onDrop={(e) => onDrop(e, item)}
            onDragOver={onDragOver}
        >
            <div className="icon" onClick={handleClick}>📁</div>
            {editing ? (
            <input type="text" className="name" defaultValue={item.name} onBlur={handleBlur} autoFocus />
            ) : (
                <div className="name">{item.name}</div>
            )}
        </div>
    );
};

export default Folder;
