import React from "react";
import "./Footer.css";
import FooterLogo from "../../Images/bamboleo-logo-footer.png";

const Footer = () => {
  return (
    <div className="site-footer" id="main-footer">
      <footer className="site-info" aria-label="Sitio">
        <div className="inside-site-info grid-container">
          <div className="copyright-bar">
            <div className="footer-logo">
              <img
                src={FooterLogo}
                width="144"
                height="75"
                className="logo entered lazyloaded"
                alt="Cadizdirecto.com"
                />
              <noscript>
                <img
                  src="https://www.cadizdirecto.com/wp-content/uploads/2023/03/bamboleo-logo.png"
                  width="144"
                  height="75"
                  className="logo"
                  alt="Cadizdirecto.com"
                />
              </noscript>
            </div>
            <div className="links">
              <div className="menu-secundario-container">
                <ul id="menu-secundario" className="menu">
                  <li
                    id="menu-item-368703"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-368703"
                  >
                    <a
                      rel="privacy-policy"
                      href="https://www.cadizdirecto.com/aviso-legal-politica-privacidad/"
                    >
                      Información Legal y Política de Privacidad
                    </a>
                  </li>
                  <li
                    id="menu-item-368702"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-368702"
                  >
                    <a href="https://www.cadizdirecto.com/quienes-somos/">
                      Quienes Somos
                    </a>
                  </li>
                  <li
                    id="menu-item-368701"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-368701"
                  >
                    <a href="https://www.cadizdirecto.com/contacto/">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>{" "}
            </div>
            <div className="copyright">
              <p>© 2024 Cádiz Directo.</p>
              <p>
                Web editada y gestionada por Bamboleo Medial SL, Avda del Perú
                12 11007 Cádiz (España). ISSN: 3020-7274. Teléfono:
                +34682076618.
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
