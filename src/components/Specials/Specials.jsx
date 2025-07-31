import './Specials.css';
import { Card } from './Card/Card';

import greekSalad from '../../assets/greek salad.jpg';
import bruchetta from '../../assets/bruchetta.svg';
import lemonDessert from '../../assets/lemon dessert.jpg';

const dishes = [
	{
		id: 1,
		image: greekSalad,
		title: 'Greek salad',
		price: '$12.99',
		description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
	},
	{
		id: 2,
		image: bruchetta,
		title: 'Bruchetta',
		price: '$5.99',
		description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
	},
	{
		id: 3,
		image: lemonDessert,
		title: 'Lemon Dessert',
		price: '$5.00',
		description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
	}
];

export const Specials = () => {
	const cards = dishes.map(dish => {
		return (
			<Card key={dish.id} {...dish} />
		);
	})

	return (
		<section className="container specials">
			<h1>This weeks specials!</h1>
			<button>Online&nbsp;Menu</button>
			<section>{cards}</section>
		</section>
	)
}
