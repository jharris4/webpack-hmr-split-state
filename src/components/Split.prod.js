import React, { PropTypes, Component } from 'react';

import { AppContainer } from 'react-hot-loader';

class Split extends Component {

  constructor(props) {
    super(props);
    this.state = { Component: false }
  }

  componentWillMount() {
    const { componentPath } = this.props;

    const that = this;

    require('bundle-loader?lazy&name=model-[name]!./' + componentPath)(
      Component => {
        that.setState( { Component });
      }
    );
  }

  render() {
    const { componentPath, ...otherProps } = this.props;
    const { Component } = this.state;
    if (Component) {
      return <Component {...otherProps}/>;
    }
    else {
      return <div></div>;
    }
  }
}

Split.propTypes = {
  componentPath: PropTypes.string.isRequired
};

module.exports = Split;