import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <span className="logo">Чат</span>
            <div className="user">
                <img src= '' alt="" />
                <span>Haz</span>
                <button>выйти</button>
            </div>
        </div>
    );
}

export default Navbar;