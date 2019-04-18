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
    let intervalFunc = () => this.setState(prevState => prevState.generator.next().value);
    this.setState({ intervalFunc })
    setInterval(intervalFunc, 1000); // 1 sec
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalFunc);
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
