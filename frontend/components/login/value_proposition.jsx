import React from 'react';

const ValueProposition = (props) => {
  return (
    <div className="value-prop">
      <h1>Connect with other heroes and villains on Capebook.</h1>
      <div className="value-prop-feature">
        <i className="fa fa-newspaper-o fa-4x" aria-hidden="true"></i>
        <span className="sub-header">See photos and updates</span>
        <span> from friends in News Feed.</span>
      </div>
      <div className="value-prop-feature">
        <i className="fa fa-desktop fa-4x" aria-hidden="true"></i>
        <span className="sub-header">Share what's new</span>
        <span> in your escapades on your Timeline.</span>
      </div>
      <div className="value-prop-feature">
        <i className="fa fa-binoculars fa-4x" aria-hidden="true"></i>
        <span className="sub-header">Find more</span>
        <span> heroic and dastardly details with Capebook Search.</span>
      </div>
    </div>
    );
};

export default ValueProposition;
