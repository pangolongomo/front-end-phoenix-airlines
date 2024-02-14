import React from "react";
import "./apropos.scss";

import aboutMainImg from "../../images/apropos/about_main.png";
import chartCroissance from "../../images/apropos/Graphics_and_charts_Flatline.svg";
import travelPlan from "../../images/apropos/Travel plans_Outline.svg";
import achievement from "../../images/apropos/Achievement _Outline.svg";

const Apropos = () => {
  return (
    <div className="about">
      <div className="container">
        {/* INTRODUCTION */}
        <div>
          <h1>A propos de Phoenix Air Lines</h1>
        </div>
        <div className="intro">
          <div className="aboutImg">
            <img src={aboutMainImg} alt="avion de phoenix air lines" />
          </div>
          <div className="aboutDefinition">
            <p>
              Merci de visiter notre site Web et de vous intéresser à notre
              entreprise. Lorsque j'ai créé l'entreprise en 2020, j'avais un
              rêve et c'était de faire du vol un plaisir ; un plaisir pour ceux
              qui apprécient à quel point l'aviation peut améliorer la vie. La
              plupart des gens ont besoin de se rendre de A à B, finalement.
              Mais je n'ai pas créé mon entreprise pour la plupart des gens. Ma
              préférence est de faire en sorte que les passagers ne quittent le
              point A que lorsqu'ils le souhaitent, sans retards, sans longues
              files d'attente ni foules à gérer, et surtout qu'ils aient un
              voyage très agréable, paisible et privé vers leur destination, au
              point B. Mes clients me disent que ce rêve est déjà une réalité.
              Cela me rend très fier de tous ceux qui travaillent ici à travers
              le groupe. La combinaison de notre expérience, de nos
              connaissances et de notre passion garantit non seulement que nous
              fournissons le meilleur service à nos clients, mais que nous le
              livrons dans un environnement convivial, et ils l'apprécient.
              J'espère un jour pouvoir vous fournir le niveau de service et le
              style de voyage que vous méritez et vous assurer de voyager du
              point A au point B et au-delà dans le confort, la sécurité et le
              style. Le tout avec le luxe. J'ai hâte de vous accueillir à bord.
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="mission">
          <div className="aboutImg">
            <img src={chartCroissance} alt="Chart de croissance" />
          </div>
          <div className="aboutDefinition">
            <h2>Notre Mission</h2>
            <p>
              Offrir des services de transport aériens public, passagers et fret
              pour faciliter la mobilité des personnes et des biens sur
              l’ensemble de l’étendue du territoire congolais et
              Africain.Contribuer activement à la sécurité et au développement
              du Secteur aérien en RDC par le respect de la réglementation.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="vision">
          <div className="aboutImg">
            <img src={travelPlan} alt="Plan de voyage" />
          </div>
          <div className="aboutDefinition">
            <h2>Notre Vision</h2>
            <p>
              Se positionné parmi les leaders dans le secteur du transport
              aérien passager et fret, en RDC et en Afrique.Développement des
              Niches et de nouveaux Hub au vu des 145 Territoires.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="objectif">
          <div className="aboutImg">
            <img src={achievement} alt="Realisation" />
          </div>
          <div className="aboutDefinition">
            <h2>Nos Objectifs</h2>
            <p>
              <span>Court-terme (0-1 an)</span> Obtenir la Licence
              d’exploitation et le Certificat de transporteur Aérien (CTA) ;
              Débuter la 1° Phase opérationnelle avec le 1° Aéronef;
            </p>
            <p>
              <span>Moyen-Terme (1-3 ans)</span> Renforcement de capacité
              opérationnelle dans la desserte des vols par l’intégration
              d’aéronef additionnels; Assurer la formation aéronautique
              permanente du personnel; Installer son Organisme de Maintenance
              Approuvé Pour la maitrise des couts y référés;
            </p>
            <p>
              <span>Long-Terme (plus de 3 ans)</span> Etendre les destinations
              et les activités à travers La RDC et le Réseau Africain à l’ère de
              l’Open Sky ;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
