import React, { Component } from 'react';

import Counter from '../Counter';
import DummyContent from '../DummyContent';

import dummyComponent from '../../dummies/dummyComponent';
import dummyChapters from '../../dummies/dummyChapters';
import dummyChaptersHome from '../../dummies/dummyChaptersHome';

class ChaptersHome extends Component {

  render() {
    let dummies = [dummyComponent(), dummyChapters(), dummyChaptersHome()];

    return(
      <div>
        <div>CHAPTERS HOME</div>
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

module.exports = ChaptersHome;