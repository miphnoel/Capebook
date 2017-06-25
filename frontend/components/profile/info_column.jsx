import React from 'react';

import Intro from './intro';
import FriendsContainer from './friends_container';

const InfoColumn = (props) => {
  return (
    <div className="info-column">
      <Intro />
      <FriendsContainer />
      <div className="photos">
        Photos
      </div>
    </div>
  );
}

export default InfoColumn;
