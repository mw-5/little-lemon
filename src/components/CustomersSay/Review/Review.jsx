import './Review.css';

export const Review = ({ id, rating, review, name, image }) => {
    let stars = '';
    for (let i = 1; i < 6; i++) {
        stars += i <= rating ? '★' : '☆';
    }

    return (
        <article className="review">
            <h5>Rating: <span className='stars'>{stars}</span></h5>
            <div className='h-stack'>
                <img src={image} alt='profile foto' />
                <h5>{name}</h5>
            </div>
            <p>{review}</p>
        </article>
    )
}