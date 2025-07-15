import logo from '../../assets/Logo.svg';
import { Nav } from '../../features/Nav/Nav';

export const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Logo" />
            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
            <section>
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
                <p>Follow us on social media!</p>
                <nav>
                    <ul>
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    )
}