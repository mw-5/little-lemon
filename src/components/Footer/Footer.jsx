import logo from '../../assets/Logo blue background.PNG';
import { Nav } from '../../components/Nav/Nav';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className='container'>
            <img src={logo} alt="Little Lemon Logo" />
            <section>
                <h4>Navigation</h4>
                <Nav className='nav-footer' />
            </section>
            <section>
                <h4>Contact</h4>
                <p>
                    4257 West Huron Street<br/>
                    Chicago, IL 60624<br/>
                    USA<br/>
                    ☏ (312) 555-1482<br/>
                    <a href="mailto:little@lemon.com">little@lemon.com</a>
                </p>
            </section>
            <section>
                <h4>Social Media</h4>
                <nav>
                    <ul className='nav-footer'>
                        <li><a href='https://www.facebook.com'>Facebook</a></li>
                        <li><a href='https://www.instagram.com'>Instagram</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    )
}