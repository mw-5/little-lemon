export const Card = ({ imgDish, title, price, description }) => {
	return (
		<article>
			<img src={ imgDish }>
			<h5>{ title }</h5>
			<span>{ price }</span>
			<p>{ description }</p>
			Order online<img>
		</article>
	)
}
