import './Card.css'
import delivery from '../../../assets/Delivery.svg';

const flexbox = {
	display: 'flex',
	flexDirection: 'row'
}
const spread = {
	...flexbox,
	justifyContent: 'space-between'
}
const flow = {
	...flexbox,
	justifyContent: 'flex-start',
}

export const Card = ({ id, image, title, price, description }) => {
	return (
		<article className="specials-card">
			<img src={image} alt='Image of a dish' />
			<div>
				<div style={spread}>
					<h5>{title}</h5>
					<span>{price}</span>
				</div>
				<p>{description}</p>
				<div className='lead-text' style={flow}>
					Order a delivery&nbsp;
					<img src={delivery} alt='Image of a scooter' />
				</div>
			</div>
		</article>
	)
}
