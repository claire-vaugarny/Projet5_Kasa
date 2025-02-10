import './Collapse.css'

function Collapse({ equipments }) {
    const defaultEquipments = [
        {
            name: 'Fiabilité',
            description: `Les annonces postées sur Kasa garantissent une Fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
        },
        {
            name: 'Respect',
            description: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                perturbation du voisinage entraînera une exclusion de notre plateforme.`
        },
        {
            name: 'Service',
            description: `Kasa met à votre disposition une plateforme de qualité avec une assistance rapide et professionnelle, 
                garantissant une expérience utilisateur optimale.`
        }
    ];

    const itemsToDisplay = equipments || defaultEquipments;

    return (
        <div className="collapse" id="navbarNav">
            <ul className="navbar-nav">
                {itemsToDisplay.map((equipment, index) => (
                    <li key={index} className='nav-item'>
                        {equipment.name}
                        {equipment.description && <p>{equipment.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Collapse;
