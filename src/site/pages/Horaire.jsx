import React, { useMemo, useState } from "react";

import donneesHoraireDeVol from "../../assets/data/donneesHoraireDeVol";
import "./horaire.scss";

function Horaire() {
  const [jour, setJour] = useState(() => "lundi");

  const volsDuJour = useMemo(() => {
    return donneesHoraireDeVol.filter((day) => day.jour === jour);
  }, [jour]);

  return (
    <div className="horaire">
      <h1>Horaire de vol</h1>

      <div className="vols">
        <select
          className="jours"
          defaultValue="lundi"
          onChange={(val) => setJour(val.target.value)}
        >
          <option value="lundi">Lundi</option>
          <option value="mardi">Mardi</option>
          <option value="mercredi">Mercredi</option>
          <option value="jeudi">Jeudi</option>
          <option value="vendredi">Vendredi</option>
          <option value="samedi">Samedi</option>
          <option value="dimanche">Dimanche</option>
        </select>
        <div className="calendrier">
          <table>
            <thead>
              <tr>
                <th>type d'avion</th>
                <th>flt numb</th>
                <th>origin</th>
                <th>destination</th>
                <th>heure de depart</th>
                <th>heure d'arrivée</th>
                <th>block time</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {volsDuJour.map((vol) => (
                <tr key={vol.id}>
                  <td>{vol.type_avion}</td>
                  <td>{vol.numero_de_vol}</td>
                  <td>{vol.origin}</td>
                  <td>{vol.destination}</td>
                  <td>{vol.depart}</td>
                  <td>{vol.arrive}</td>
                  <td>{vol.duree}</td>
                  <td>{vol.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Horaire;
