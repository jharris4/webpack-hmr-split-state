import React, { Component } from 'react';

import Counter from '../Counter';
import DummyContent from '../DummyContent';

import dummyChapters from '../../dummies/dummyChapters';
import dummyChaptersDetail from '../../dummies/dummyChaptersDetail';

class ChaptersDetail extends Component {

  render() {
    let dummies = [dummyChapters(), dummyChaptersDetail()];

    return(
      <div>
        <div>CHAPTERS DETAIL</div>
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

module.exports = ChaptersDetail;