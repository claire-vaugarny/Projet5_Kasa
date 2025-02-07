import '../styles/Card.css';

function Card({ cover, title }) {
    return (
        <div className="Card">
            <img className='cardImage' src={cover} alt={title}></img>
            <p className="cardTitle">{title}</p>
        </div>
    );
}

export default Card;