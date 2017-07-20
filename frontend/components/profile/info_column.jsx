import React from 'react';

import Intro from './intro';
import FriendsContainer from './friends_container';
import Photos from './photos';

const InfoColumn = (props) => {
  return (
    <div className="info-column">
      <Intro />
      <FriendsContainer />
      <Photos />
    </div>
  );
}

export default InfoColumn;
