import React from "react";
import "./LogementCard.scss";
import { Link } from "react-router-dom";

const LogementCard = ({ logement }) => {
    return (
        <div className="logementCardContainer">
            <Link to={`/logement/${logement.id}`}>
                <div
                    className="logementCard"
                    style={{ backgroundImage: `url(${logement.cover})` }}
                >
                    <div className="logementCardShaddow"><h2>{logement.title}</h2></div>
                </div>
            </Link>
        </div>
    );
};

export default LogementCard;
