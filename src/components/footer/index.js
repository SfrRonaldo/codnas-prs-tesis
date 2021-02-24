import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            Copyright © 2021. Hecho por Ronaldo Romario Tunque Cahui. Todos los
            derechos reservados.
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/RonaldoTunqueC"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/SfrRonaldo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/ronaldotunquecahui/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
