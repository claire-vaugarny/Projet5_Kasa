import { useState } from 'react';
import './slider.scss';
import arrowPrevious from '../../assets/arrowPrevious.svg';
import arrowNext from '../../assets/arrowNext.svg';

function Slider({ pictures }) {
    // L'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour aller à l'image précédente
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    // Fonction pour aller à l'image suivante
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    // Ne pas afficher les boutons si il n'y a qu'une image
    if (pictures.length <= 1) {
        return (
            <div className="slider-container">
                {/* Image actuelle */}
                <div className="slider-image">
                    <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                </div>
            </div>
        );
    }

    return (
        <div className="slider-container">
            {/* Flèche précédente */}
            <button onClick={handlePrevious} className="slider-button prev">
                <img src={arrowPrevious} alt="Previous" />
            </button>

            {/* Image actuelle */}
            <div className="slider-image">
                <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div>

            {/* Numérotation */}
            <div className='slider-numerotation'>
                {currentIndex + 1}/{pictures.length}
            </div>

            {/* Flèche suivante */}
            <button onClick={handleNext} className="slider-button next">
                <img src={arrowNext} alt="Next" />
            </button>
        </div>
    );
}

export default Slider;
