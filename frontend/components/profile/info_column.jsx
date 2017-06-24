import React from 'react';

import Intro from './intro';
import FriendsContainer from './friends_container';

const InfoColumn = (props) => {
  const user = props.user;
  return (
    <div className="info-column">
      <Intro user={user} />
      <FriendsContainer user={user} />
      <div className="photos">
        Photos
      </div>
    </div>
  );
}

export default InfoColumn;
