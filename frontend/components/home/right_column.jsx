import React from 'react';
import { connect } from 'react-redux';

const RightColumn = (props) => (
  <div className="right-col">
    <div className="event-notifications">
      Welcome to Capebook!
    </div>
    <div className="ads">
      <p>Check out tuneLoop to write your own melody!</p>

    </div>
  </div>
);

export default connect(
  null,
  null
)(RightColumn);
