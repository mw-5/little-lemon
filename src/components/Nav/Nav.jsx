import { HomePage } from '../../pages/HomePage/HomePage';
import './Nav.css';
import { Link } from 'react-router-dom';

export const Nav = ({ className }) => {
    return (
        <nav>
            <ul className={className}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><a>Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    );
}