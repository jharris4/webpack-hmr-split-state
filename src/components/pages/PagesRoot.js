import React, { Component } from 'react';
import { Link } from 'react-router';

import DummyContent from '../DummyContent';

import dummyComponent from '../../dummies/dummyComponent';
import dummyPages from '../../dummies/dummyPages';

class PagesRoot extends Component {

  render() {
    let dummies = [dummyComponent(), dummyPages()];

    return(
      <div>
        <div style={{"border": "1px solid black", "margin-bottom": 10}}>
          <div>PAGES ROOT</div>
          <div><Link to="/">Home</Link></div>
          <div><DummyContent dummies={dummies}/></div>
        </div>
        <div style={{ "padding-top": 10 }}>{this.props.children}</div>
      </div>
    );
  }
}

module.exports = PagesRoot;