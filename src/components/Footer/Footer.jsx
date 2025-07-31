import logo from '../../assets/Logo.svg';
import { Nav } from '../../components/Nav/Nav';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className='container'>
            <img src={logo} alt="Little Lemon Logo" />
            <section>
                <h4>Doormat Navigation</h4>
                <Nav className='nav-doormat' />
            </section>
            <section>
                <h4>Contact</h4>
                <p>
                    address: 1st street, Chicago<br/>
                    phone number: 123<br/>
                    email: <a href="mailto:little@lemon.com">little@lemon.com</a>
                </p>
            </section>
            <section>
                <h4>Social Media Links</h4>
                <nav>
                    <ul className='nav-doormat'>
                        <li><a href='https://www.facebook.com'>Facebook</a></li>
                        <li><a href='https://www.instagram.com'>Instagram</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    )
}