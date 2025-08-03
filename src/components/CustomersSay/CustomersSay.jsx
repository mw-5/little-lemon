import './CustomersSay.css';
import { Review } from './Review/Review.jsx';

import emilio from '../../assets/EmilioHerrera.jpeg';
import jane from '../../assets/JaneSmith.jpeg';
import alice from '../../assets/AliceJohnson.jpeg';
import bob from '../../assets/BobBrown.jpeg';


const reviews = [
    {
        id: 1,
        rating: 5,
        review: 'Amazing food and great service!',
        name: 'Emilio Herrera',
        image: emilio,
    },
    {
        id: 2,
        rating: 4,
        review: 'Delicious dishes, will come back again.',
        name: 'Jane Smith',
        image: jane,
    },
    {
        id: 3,
        rating: 5,
        review: 'Best dining experience I have ever had!',
        name: 'Alice Johnson',
        image: alice,
    },
    {
        id: 4,
        rating: 3,
        review: 'Good food, but the service was a bit slow.',
        name: 'Bob Brown',
        image: bob,
    },
]

export const CustomersSay = () => {
    const testimonials = reviews.map(review => {
        return <Review key={review.id} {...review} />
    });

    return (
        <section className='container customers-say'>
            <h1>Testimonials</h1>
            {testimonials}
        </section>
    )
}