import React from "react";
import { Link } from "react-router-dom";
import "./erreur.scss";

const Erreur = () => {
  return (
    <div className="erreur">
      <h1>Oups ! La page que vous cherchez n'existe pas.</h1>
      <p>
        Nous sommes désolés pour ce désagrément. Il se peut que la page ait été
        supprimée, déplacée ou renommée.
      </p>
      <p>
        Vous pouvez vérifier l'adresse que vous avez saisie dans la barre d'URL
        ou utiliser le bouton "précédent" de votre navigateur pour revenir à la
        page précédente.
      </p>
      <Link to="/">[Retour à la page d'accueil]</Link>
    </div>
  );
};

export default Erreur;
