import { useParams } from 'react-router-dom';
import './logement.scss';

function logement(){
    const {id} = useParams();

    
    return(
    <div>logement {id}</div>
    )
}
export default logement;