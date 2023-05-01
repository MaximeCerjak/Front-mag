import React from 'react';
import './Search.scss'

const Search = () => {
    return (
        <div className='searchElem'>
            <p>Faites votre recherche ...</p>
            <div className="search-input">
                <input type="text" className="search-input"/>
                <span className="search-icon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
};

export default Search;