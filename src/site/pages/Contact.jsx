import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./contact.scss";

export default function contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contactez-nous</h1>
        <p>
          Nous apprécions vos questions et vos commentaires - il nous fait
          plaisir de vous assister! Vous trouverez ci-dessous un moyen de nous
          joindre.
        </p>
      </div>
      <div className="contactSection">
        <div className="message">
          <h2>Envoyez-nous un message</h2>
          <p>
            envoyez-nous des messages et nous vous répondrons dans les 24
            heures.
          </p>
          <div className="nom">
            <label htmlFor="nom">Nom:</label>
            <input type="text" id="nom" name="nom" />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="sujet">
            <label htmlFor="sujet">Sujet:</label>
            <textarea type="text" id="sujet" name="sujet"></textarea>
          </div>
          <div className="submit">
            <button type="submit" id="submit">
              Envoyer
            </button>
          </div>
        </div>
        <div className="info">
          <h2>Nos coordonnées</h2>
          <hr />
          <p>N° 2026, Boulevard Lumumba 7e Rue Résidentielle</p>
          <p>support@phoenixairlines.net</p>
          <p>+243 842 253 031</p>
          <hr />
          <div className="socials">
            <a
              href="https://linkedin.com/company/phoenixairlinesrdc"
              rel="noreferrer"
              target="_blank"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            {/* <a href="/" className="twitter">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a> */}
            <a
              href="https://www.facebook.com/phoenixairlinesrdc"
              rel="noreferrer"
              target="_blank"
              className="facebook"
            >
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a
              href="https://www.instagram.com/phoenixairlinesrdc/"
              rel="noreferrer"
              target="_blank"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            {/* <a href="/" className="youtube">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a> */}
          </div>
        </div>
      </div>
      <div className="addresse">
        <h1>Visitez notre addresse</h1>
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.3113089435387!2d15.329817627658093!3d-4.352580137749016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a375c3b28032d%3A0x3c7bf2e24a176eec!2sPhoenix%20Air%20Lines!5e0!3m2!1sfr!2scd!4v1678269407260!5m2!1sfr!2scd"
          title="our location"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
