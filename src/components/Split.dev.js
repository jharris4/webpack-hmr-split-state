import React, { PropTypes, Component } from 'react';

class Split extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { componentPath, ...otherProps } = this.props;

    let Component = require('./' + componentPath);
    return <Component {...otherProps}/>;
  }
}

Split.propTypes = {
  componentPath: PropTypes.string.isRequired
};

module.exports = Split;

