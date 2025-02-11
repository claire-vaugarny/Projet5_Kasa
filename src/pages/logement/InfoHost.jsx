import './infoHost.scss'

function InfoHost({ host }) {
    return(
        <div className="infoHostContainer">
            <p className="hostName">{host.name}</p>
            <img src={host.picture} alt="photo de profil du propriétaire" />
        </div>
    );
}

export default InfoHost;
