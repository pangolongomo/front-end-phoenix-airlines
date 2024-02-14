import "./reservations.scss";

import React, { useState } from "react";

function Reservations() {
  const [voyageType, setVoyageType] = useState(false);

  const handleVoyage = (v) => {
    if (v === "aller") setVoyageType(false);
    if (v === "allerR") setVoyageType(true);
  };

  return (
    <div className="reservations">
      <h1>Faites vos réservations</h1>
      <div className="checkin_menu">
        <div className="categorieVol">
          <div>
            <input
              type="radio"
              name="type_de_vol"
              id="aller"
              value="aller"
              onClick={(val) => {
                handleVoyage(val.target.value);
              }}
              checked={!voyageType ? true : false}
              readOnly
            />
            <label htmlFor="aller">Aller Simple</label>
          </div>
          <div>
            <input
              type="radio"
              name="type_de_vol"
              value="allerR"
              id="allerR"
              onClick={(val) => {
                handleVoyage(val.target.value);
              }}
              checked={voyageType ? true : false}
              readOnly
            />
            <label htmlFor="allerR">Aller-retour</label>
          </div>
        </div>
        <div className="checkin_info">
          <div className="places">
            <div className="places__origin">
              <label>Origine</label>
              <input type="text" placeholder="Aéroport ou pays" />
            </div>
            <div className="places__dest">
              <label>Déstination</label>
              <input type="text" placeholder="Aéroport ou pays" />
            </div>
          </div>
          <div className="jour">
            <div className="jour__aller">
              <label>Aller</label>
              <input type="text" placeholder="Date" />
            </div>
            <div
              className={`jour__retour ${!voyageType ? "allersimple" : null}`}
            >
              <label>Retour</label>
              <input type="text" placeholder="Date" />
            </div>
          </div>
        </div>
        <div className="submitBtn">
          <button>Rechercher</button>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
