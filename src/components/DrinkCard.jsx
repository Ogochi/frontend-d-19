import React from 'react';

export default class DrinkCard extends React.Component {
  render() {
    let { name, img } = this.props;

    return (
      <div className="drink-card">
        <img src={img} className="drink-card__img" />
        <span className="drink-card__text">{name}</span>
      </div>
    );
  }
}
