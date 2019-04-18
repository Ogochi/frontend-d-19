import React from 'react';

function* time({h, m, s}) {
  while (true) {
    s = (s + 1) % 60;

    if (s === 0) {
      m = (m + 1) % 60;

      if (m === 0) {
        h = (h + 1) % 24;
      }
    }

    yield {h, m, s};
  }
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();
    const t = {
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    };

    this.state = {
      generator: time(t),
      ...t
    }
  }

  componentDidMount() {
    window.setInterval(() =>
      this.setState(prevState => prevState.generator.next().value), 1000 // 1 sec
    );
  }

  render() {
    return (
      <span className="clock">
        {this.state.h.toString().padStart(2, '0')}:
        {this.state.m.toString().padStart(2, '0')}:
        {this.state.s.toString().padStart(2, '0')}
      </span>
    );
  }
}
