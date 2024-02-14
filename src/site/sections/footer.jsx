import "./footer.scss";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  // faTwitter,
  faLinkedin,
  faInstagram,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contacts">
        <div className="container">
          <div className="phone">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#ffb53a"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="description">
              <a href="tel:+243842253031">+243 842 253 031</a>
              <p>08h00 - 17h00, Lun. - Sam.</p>
            </div>
          </div>
          <div className="site">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-opened"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#ffb53a"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="3 9 12 15 21 9 12 3 3 9" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <line x1="3" y1="19" x2="9" y2="13" />
                <line x1="15" y1="13" x2="21" y2="19" />
              </svg>
            </div>
            <div className="description">
              <a href="mailto:support@phoenixairlines.net">
                support@phoenixairlines.net
              </a>
              <p>support en ligne</p>
            </div>
          </div>
          <div className="map">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#ffb53a"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />
                <line x1="9" y1="4" x2="9" y2="17" />
                <line x1="15" y1="7" x2="15" y2="20" />
              </svg>
            </div>
            <div className="description">
              <a
                href="https://goo.gl/maps/AjKn2VwBK5hPv8xB9"
                rel="noreferrer"
                target="_blank"
              >
                Limete / Kinshasa, RD Congo
              </a>
              <p>
                N° 2026, Boulevard Lumumba
                <br />
                7e rue résidentielle
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="container">
          <div className="titre">Rejoignez-nous sur les réseaux sociaux</div>
          <div className="social_links">
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
      <div className="entreprise">
        <div className="container">
          <div>
            <h3>Phoenix Airlines</h3>

            <p>
              <Link to="apropos">À propos de nous</Link>
            </p>
            <p>
              <a
                href="https://phoenixairlines.bamboohr.com/careers"
                rel="noreferrer"
                target="_blank"
              >
                Carrières
              </a>
            </p>
          </div>
          <div>
            <h3>meilleures destinations</h3>

            <p>Kinshasa</p>
            <p>Lubumbashi</p>
            <p>Goma</p>
            <p>Kisangani</p>
            <p>Kalemi</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          Copyright &copy; 2023 Par&nbsp;<a href="/">Phoenix Air lines</a>
          &nbsp;Tous les droits sont réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
