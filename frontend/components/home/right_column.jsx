import React from 'react';
import { connect } from 'react-redux';

const RightColumn = (props) => (
  <div className="right-col">
    <div className="event-notifications">
      Welcome to Capebook!
    </div>
    <div className="ads">
      <a href="http://miphnoel.github.io/tuneLoop"
        target="_blank">
        <img
          src="http://dssra5iv431o5.cloudfront.net/users/static/tuneloop.png"
          alt="tuneLoop sample image"/>
        <p>Check out tuneLoop to write your own melody!</p>
      </a>

    </div>
  </div>
);

export default connect(
  null,
  null
)(RightColumn);
