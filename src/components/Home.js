import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

  render() {
    return (
      <div>
        <div style={{ "padding-bottom": 5 }}>This is the home page</div>
        <div>
          <div><Link to="/pages">Pages Home</Link></div>
          <div><Link to="/pages/123">Pages Detail</Link></div>
          <div><Link to="/chapters">Chapters Home</Link></div>
          <div><Link to="/chapters/123">Chapters Detail</Link></div>
        </div>
      </div>);
  }
}

module.exports = Home;