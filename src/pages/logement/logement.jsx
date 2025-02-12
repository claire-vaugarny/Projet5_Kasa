import { useParams, Navigate } from 'react-router-dom';
import './logement.scss';
import logements from '../../assets/datas.json';
import Avis from './Avis';
import InfoHost from './InfoHost';
import Collapse from '../../components/Collapse';
import Tags from './Tags';
import Slider from './Slider';

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    // Si aucun logement n'a été trouvé, on redirige vers la page Error404
    if (!logement) {
        return <Navigate to="/error404" />;
    }
    const rating = parseInt(logement.rating, 10);
    // Si on a trouvé le logement, on l'affiche
    return (
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
    );
}

export default Logement;
