import './Card.css'

const spread = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
}

export const Card = ({ id, image, title, price, description }) => {
	return (
		<article className="specials-card">
			<img src={image} />
			<div style={spread}>
				<h5>{title}</h5>
				<span>{price}</span>
			</div>
			<p>{description}</p>
			Order online<img />
		</article>
	)
}
