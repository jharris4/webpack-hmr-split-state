import React, { PropTypes, Component } from 'react';

class Counter extends Component {

  static propTypes = {
    dummies: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dummies } = this.props;

    return(
      <span>Dummy Content: {JSON.stringify(dummies)}</span>
    );
  }
}

module.exports = Counter;