import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Nav = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            { className === 'nav-header'
            ? <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation">
                ☰
            </button>
            : null }
            <ul
                className={`${className} ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(false)}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}