import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    let onClick = () => {
      let { counter } = this.state;
      counter++;
      this.setState({ counter });
    };

    const { counter } = this.state;

    return(
      <span><button onClick={onClick}>Click Me</button> {counter}</span>
    );
  }
}

module.exports = Counter;