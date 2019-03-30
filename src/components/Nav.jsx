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
    let classes = "";
    if (section === this.state.currentSection) {
      classes += "active";
    }

    return (
      <div
        className={classes}
        onClick={this.onSectionClicked}
        key={"section-" + section}
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
