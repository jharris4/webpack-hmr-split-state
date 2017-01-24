import React, { Component } from 'react';

import Counter from '../Counter';
import DummyContent from '../DummyContent';

import dummyComponent from '../../dummies/dummyComponent';
import dummyPages from '../../dummies/dummyPages';
import dummyPagesHome from '../../dummies/dummyPagesHome';

class PagesHome extends Component {

  render() {
    let dummies = [dummyComponent(), dummyPages(), dummyPagesHome()];

    return(
      <div>
        <div>PAGES HOME</div>
        <div>
          <Counter/>
        </div>
        <div>
          <DummyContent dummies={dummies}/>
        </div>
      </div>
    );
  }
}

module.exports = PagesHome;