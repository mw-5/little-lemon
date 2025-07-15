import logo from '../../assets/Logo.svg';
import { Nav } from '../../features/Nav/Nav';
import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Logo" />
            <section>
                <h2>Doormat Navigation</h2>
                <Nav />
            </section>
            <section>
                <h2>Contact</h2>
                <p>
                    address: 1st street, Chicago<br/>
                    phone number: 123<br/>
                    email: <a href="mailto:little@lemon.com">little@lemon.com</a>
                </p>
            </section>
            <section>
                <h2>Social Media Links</h2>
                <nav>
                    <ul>
                        <li><a href='https://www.facebook.com'>Facebook</a></li>
                        <li><a href='https://www.instagram.com'>Instagram</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    )
}