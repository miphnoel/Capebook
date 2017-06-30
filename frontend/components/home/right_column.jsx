import React from 'react';
import { connect } from 'react-redux';

const RightColumn = (props) => (
  <div className="right-col">
    <div className="event-notifications">
      Event notifications
    </div>
    <div className="trending">
      Trending
    </div>
  </div>
);

export default connect(
  null,
  null
)(RightColumn);
