import './Header.css';
import logo from '../../assets/Logo.svg';
import { Nav } from '../Nav/Nav';

export const Header = () => {
    return (
        <header className='container'>
            <img src={logo} alt="Little Lemon Logo" />
            <Nav className='nav-header' />
        </header>
    )
}