import { useNavigate } from 'react-router-dom';
import hero from '../../assets/restauranfood.jpg';
import './CallToAction.css';

export const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <section className='container call-to-action'>
            <article>
                <h1>Little&nbsp;Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button onClick={() => navigate('/booking')}>Reserve a table</button>
            </article>
            <img src={hero} alt="Image of bruchetta"></img>
        </section>
    );
}