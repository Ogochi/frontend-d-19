import React from 'react';
import { faFacebookF, faInstagram, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <span className="prefix">Say hello! -</span>
          <span>hi@dinks.com</span>
        </div>
        <div>
          <span className="prefix">Follow us</span>
          <span className="icons">
            <a href="https://dribbble.com">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </span>
        </div>
      </footer>
    );
  }
}
