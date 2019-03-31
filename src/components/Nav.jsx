import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: props.sections,
      currentSection: props.sections[0] || ""
    };
  }

  renderSection = section => {
    let className = "nav__elem";
    if (section === this.state.currentSection) {
      className += "--active";
    }

    return (
      <div
        className={className}
        onClick={this.onSectionClicked}
        key={"section-nav-" + section}
      >
        {section}
      </div>
    );
  }

  onSectionClicked = event => {
    let sectionName = event.target.textContent;
    this.setState({
      currentSection: sectionName
    });

    this.props.onChange(sectionName);
  }

  render() {
    return (
      <div className="nav">
        { this.state.sections.map(this.renderSection) }
      </div>
    );
  }
}
