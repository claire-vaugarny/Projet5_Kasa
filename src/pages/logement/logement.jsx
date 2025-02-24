import { useParams, Navigate } from 'react-router-dom';
import './logement.scss';
import logements from '../../assets/datas.json';
import Avis from './Avis';
import InfoHost from './InfoHost';
import Collapse from '../../components/Collapse';
import Tags from './Tags';
import Slider from './Slider';

import React, { useState, useEffect } from 'react';
import Loader from './Loader';

function Logement() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [logement, setLogement] = useState(null);
 
    useEffect(() => {
        // Récupération des données
        const fetchedLogement = logements.find((logement) => logement.id === id);
        
        setLogement(fetchedLogement);
        setIsLoading(false);
    }, [id]); // On refait l'opération si l'ID change

    // Si on est en train de charger, afficher le Loader
    if (isLoading) {
        return <Loader />;
    }

    // Si aucun logement n'a été trouvé, on redirige vers la page Error404
    if (!logement) {
        return <Navigate to="/error404" />;
    }

    // Si on a trouvé le logement, on l'affiche
    const rating = parseInt(logement.rating, 10);
    return (
        <main>
            <div className='logementPage'>
                <Slider pictures={logement.pictures} />
                <div className="topInfoContainer">
                    <div className="infoLeftContainer">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                        <Tags tags={logement.tags} />
                    </div>
                    <div className="infoRightcontainer">
                        <InfoHost host={logement.host} />
                        <Avis rating={rating} />
                    </div>
                </div>
                <div className="collapsesContainer">
                    <Collapse collapseTitle={"Description"} collapseInfo={logement.description} collapsePage={'collapseLogement'} />
                    <Collapse collapseTitle={"Équipements"} collapseInfo={logement.equipments} collapsePage={'collapseLogement'} />
                </div>
            </div>
        </main>
    );
}

export default Logement;
