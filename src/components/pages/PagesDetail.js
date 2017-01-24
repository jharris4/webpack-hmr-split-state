import React, { Component } from 'react';

import Counter from '../Counter';
import DummyContent from '../DummyContent';

import dummyComponent from '../../dummies/dummyComponent';
import dummyPages from '../../dummies/dummyPages';
import dummyPagesDetail from '../../dummies/dummyPagesDetail';

class PagesDetail extends Component {

  render() {
    let dummies = [dummyComponent(), dummyPages(), dummyPagesDetail()];

    return(
      <div>
        <div>PAGES DETAIL</div>
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

module.exports = PagesDetail;