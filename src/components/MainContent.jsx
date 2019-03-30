import React from 'react';
import Nav from './Nav.jsx';
import { mainPageURL } from '../utils/consts.js'

const sections = [
  "Beer",
  "Coffee / Tea",
  "Cocktails",
  "Cocoa",
  "Milk / Float / Shake",
  "Shot",
  "Punch / Party Drink",
  "Homemade Liqueur"
];

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: sections[0] || "",
      navSections: sections
    };
  }

  onSectionChanged = sectionName => {
    console.log(sectionName);
  }

  render() {
    return (
      <section>
        <div className="logo-container">
          <a href={mainPageURL} className="logo">d'inks</a>
        </div>
        <section>
          <div className="nav-container">
            <Nav sections={this.state.navSections} onChange={this.onSectionChanged} />
          </div>
          <div className="content-container">

          </div>
        </section>
      </section>
    );
  }
}
