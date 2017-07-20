import React from 'react';

import InfoColumn from './info_column';
import Feed from '../feed/feed';

const Timeline = () => {
  return (
    <div className="timeline">
      <InfoColumn />
      <Feed />
    </div>
  );
}

export default Timeline;
