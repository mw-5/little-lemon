import { HomePage } from '../../pages/HomePage/HomePage';
import './Nav.css';
import { Link } from 'react-router-dom';

export const Nav = ({ className }) => {
    return (
        <nav>
            <ul className={className}>
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