import React from 'react';
import "./css/header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1> Mübariz Yolchiyev</h1>
            <nav>
                <ul>
                    <li><Link to="/">Hakkında</Link></li>
                    <li><Link to="/projects">Projeler</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;