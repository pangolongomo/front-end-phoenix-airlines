import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faCouch } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

import "./reservation.scss";

function Reservation() {
  return (
    <div className="reservation">
      <div className="container">
        <div className="titles">
          <h1>Comment réserver votre billet d'avion ?</h1>
          <hr />
          <p>Découvrez le processus utilisé pour réserver un vol.</p>
        </div>
        <div className="steps">
          <div className="steps__part">
            <FontAwesomeIcon icon={faRightToBracket} />
            <h3>Identification</h3>
            <p>
              L'utilisateur doit avoir un compte pour démarrer le processus de
              réservation
            </p>
          </div>
          <div className="steps__part">
            <FontAwesomeIcon icon={faCouch} />
            <h3>Sélection de vol</h3>
            <p>
              Après la connexion, l'utilisateur doit vérifier le siège libre
              pour une date spécifique
            </p>
          </div>
          <div className="steps__part">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <h3>Confirmation</h3>
            <p>
              Après avoir trouvé le siège libre, l'utilisateur saisira les
              détails du passager et confirmera le paiement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
