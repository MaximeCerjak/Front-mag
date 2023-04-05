import React, { useState } from 'react';
import pocketCase from '../../assets/case.png';


function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
        const menu = document.querySelector('.menu');
        const icone = document.querySelector('.icon-menu');
        menu.classList.toggle('menu-open');
        icone.classList.toggle('icon-menu-open');
    }

    return (
    <div className="menu">
        <img src={pocketCase} className="icon-menu"  onClick={toggleMenu} />
        {showMenu && (
        <div className="menu-items">
            <ul className='list-menu'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        )}
    </div>
    );
}

export default Menu;