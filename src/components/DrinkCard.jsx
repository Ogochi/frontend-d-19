import React from 'react';

export default class DrinkCard extends React.Component {
  render() {
    let { name, img } = this.props;

    return (
      <div className="drink-card">
        <img src={img} />
        <span>{name}</span>
      </div>
    );
  }
}
