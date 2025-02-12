import { useState } from 'react';
import './Collapse.scss';
import array from '../assets/arrayUp.svg';


function Collapse({ collapseTitle, collapseInfo, collapsePage }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

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
            {isOpen && (
                <div className="collapse-content">
                    {Array.isArray(collapseInfo) ? (
                        collapseInfo.map((info, index) => (
                            <p key={index}>{info}</p> // Affiche chaque élément du tableau
                        ))
                    ) : (
                        <p>{collapseInfo}</p> // Si collapseInfo est une seule chaîne
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;
