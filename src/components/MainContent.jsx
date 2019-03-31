import React from 'react';
import Nav from './Nav.jsx';
import DrinksView from './DrinksView.jsx';
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
      <section className="main-container__content">
        <div>
          <a href={mainPageURL} className="logo">d'inks</a>
        </div>
        <section className="navigable-content">
          <div className="navigable-content__nav-container">
            <Nav sections={this.state.navSections} onChange={this.onSectionChanged} />
          </div>
          <div className="navigable-content__content-container">
            <DrinksView />
          </div>
        </section>
      </section>
    );
  }
}
