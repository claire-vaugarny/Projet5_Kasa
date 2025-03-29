import { useState, useRef, useEffect } from 'react';
import './Collapse.scss';
import array from '../assets/arrayUp.svg';

function Collapse({ collapseTitle, collapseInfo, collapsePage }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); // Référence au contenu du collapse
    const [maxHeight, setMaxHeight] = useState('0px'); // Variable d'état pour la hauteur

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`); // Définit la hauteur maximale lors de l'ouverture
        } else {
            setMaxHeight('0px'); // Réduit la hauteur à 0 lors de la fermeture
        }
    }, [isOpen]); // Réexécute l'effet lorsque isOpen change

    return (
        <div className={`collapse-container ${collapsePage || ''}`}>
            <button onClick={toggleCollapse} className="collapse-title">
                {collapseTitle}
                <img
                    src={array}
                    alt="arrow up"
                    className={`collapse-icon ${isOpen ? 'open' : ''}`}
                />
            </button>
            {isOpen && ( // Le contenu ne sera rendu que lorsque isOpen est true
                <div
                    className="collapse-content"
                    ref={contentRef}
                    style={{ maxHeight }}
                >
                    {Array.isArray(collapseInfo) ? (
                        collapseInfo.map((info, index) => (
                            <p key={index}>{info}</p>
                        ))
                    ) : (
                        <p>{collapseInfo}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;
