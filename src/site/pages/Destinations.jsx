import  "./destinations.scss";

import React from "react";

//destinations
import photoKin from "../../images/destinations/kinshasa.png";
import photoGoma from "../../images/destinations/goma.png";
import photoKolwezi from "../../images/destinations/kolwezi.png";
import photoMbujiMayi from "../../images/destinations/mbuji-mayi.png";
import photoLushi from "../../images/destinations/lushi.png";

function Destinations() {
  return (
    <div className="destinations">
      <h1>Nos meilleurs destinations</h1>
      <div className="grille">
        <div>
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
    </div>
  );
}

export default Destinations;
