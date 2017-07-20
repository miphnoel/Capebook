import React from 'react';
import { connect } from 'react-redux';

const RightColumn = (props) => (
  <div className="right-col">
    <div className="event-notifications">
      Welcome to Capebook!
    </div>
    <ul className="ads">
      <li>
        <a href="https://miphnoel.github.io/tuneLoop"
          target="_blank">
          <img
            src="https://dssra5iv431o5.cloudfront.net/users/static/tuneloop.png"
            alt="tuneLoop sample image"/>
          <p>Become a composer in just 60 seconds with tuneLoop!</p>
          <p>An interactive JavaScript melody sequencer</p>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=phYXk29-3jE"
          target="_blank">
          <img
            src="https://dssra5iv431o5.cloudfront.net/users/static/action_shot.png"
            alt="performance sample image"/>
          <p>You won't believe this Software Engineer's voice!</p>
          <p>Michael Noel, NYC-based programmer, performs "Somebody to Love" with the GW Vibes. Award winning, Buzzfeed-featured acapella rendition.</p>
        </a>
      </li>
    </ul>
  </div>
);

export default connect(
  null,
  null
)(RightColumn);
