import pinkStar from '../../assets/pinkStar.svg';
import greyStar from '../../assets/greyStar.svg';
import './avis.scss'

function Avis({ rating }) {
    const nbgris = 5 - rating; 
    // Créer un tableau d'images d'étoiles
    const stars = [];
    
    for (let i = 0; i < rating; i++) {
        stars.push(<img key={`full-${i}`} src={pinkStar} alt="Pink star" />);
    }

    for (let j = 0; j < nbgris; j++) {
        stars.push(<img key={`empty-${j}`} src={greyStar} alt="Grey star" />);
    }

    return <div className="aviscontainer">{stars}</div>;
}

export default Avis;
