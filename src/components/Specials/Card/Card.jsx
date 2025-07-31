export const Card = ({ id, image, title, price, description }) => {
	return (
		<article>
			<img src={image} />
			<h5>{title}</h5>
			<span>{price}</span>
			<p>{description}</p>
			Order online<img />
		</article>
	)
}
