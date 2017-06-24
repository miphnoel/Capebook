import React from 'react';

const Intro = ({ user }) => {


  return (
    <div className="intro">
      <div className="intro-header">
        <i className="fa fa-globe globe" aria-hidden="true"></i>
        <span>Intro</span>
      </div>
      <ul className="user-details">
        <li>Birthday: {user.dob}</li>
        <li>Alignment: {user.alignment}</li>
      </ul>
    </div>
  );
}

export default Intro;
