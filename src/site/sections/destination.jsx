import React from "react";

import "./destination.scss";

//photos destinations
import photoKin from "../../images/destinations/kinshasa.png";
import photoGoma from "../../images/destinations/goma.png";
import photoKolwezi from "../../images/destinations/kolwezi.png";
import photoMbujiMayi from "../../images/destinations/mbuji-mayi.png";
import photoLushi from "../../images/destinations/lushi.png";

import { Link } from "react-router-dom";

function Destination() {
  return (
    <div className="destination">
      <div className="container">
        <div className="titles">
          <h1>Decouvrez nos meilleures destinations</h1>
          <hr />
          <p>Découvrez le processus utilisé pour réserver un vol.</p>
        </div>
        <div className="dest">
          <div className="photo_1">
            <img src={photoKin} alt="Kinshasa boulevard triomphal" />
            <div className="imgText">
              <h1>Kinshasa</h1>
            </div>
          </div>
          <div>
            <img src={photoGoma} alt="hotel de Goma" />
            <div className="imgText">
              <h1>Goma</h1>
            </div>
          </div>
          <div>
            <img src={photoKolwezi} alt="rond-point à kolwezi" />
            <div className="imgText">
              <h1>Kolwezi</h1>
            </div>
          </div>
          <div>
            <img src={photoMbujiMayi} alt="Aeroport de Mbuji-mayi" />
            <div className="imgText">
              <h1>Mbuji-Mayi</h1>
            </div>
          </div>
          <div>
            <img src={photoLushi} alt="Rond-point Lubumbashi" />
            <div className="imgText">
              <h1>Lubumbashi</h1>
            </div>
          </div>
        </div>
        <div className="destBtn">
          <Link to="/destinations">toutes nos destinations</Link>
        </div>
      </div>
    </div>
  );
}

export default Destination;
