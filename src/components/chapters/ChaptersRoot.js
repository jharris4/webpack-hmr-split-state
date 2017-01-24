import React, { Component } from 'react';
import { Link } from 'react-router';

import DummyContent from '../DummyContent';

class ChaptersRoot extends Component {

  render() {
    let dummies = [];

    return(
      <div>
        <div style={{"border": "1px solid black", "margin-bottom": 10}}>
          <div>CHAPTERS ROOT</div>
          <div><Link to="/">Home</Link></div>
          <div><DummyContent dummies={dummies}/></div>
        </div>
        <div style={{ "padding-top": 10 }}>{this.props.children}</div>
      </div>
    );
  }
}

module.exports = ChaptersRoot;