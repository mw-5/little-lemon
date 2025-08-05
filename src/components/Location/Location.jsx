import './Location.css';
import imageA from '../../assets/Mario and Adrian A.jpg';
import imageB from '../../assets/restaurant chef B.jpg';

export const Location = () => {
    return (
        <section className='container location'>
            <article>
                <h1>Little&nbsp;Lemon</h1>
                <h2>Chicago</h2>
                <p><span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span></p>
            </article>
            <img src={imageA} alt="image of restaurant chefs" className='img-a' />
            <img src={imageB} alt="iamge of restaurant chef" className='img-b' />
        </section>
    );
}