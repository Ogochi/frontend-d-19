import React from 'react';
import { faFacebookF, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__elem">
          <span className="footer__elem-prefix">Say hello! -</span>
          <span>hi@dinks.com</span>
        </div>
        <div className="footer__elem">
          <span className="footer__elem-prefix">Follow us</span>
          <span className="footer__icons-container">
            <a href="https://dribbble.com" className="footer-icon">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="https://instagram.com" className="footer-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" className="footer-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </span>
        </div>
      </footer>
    );
  }
}
