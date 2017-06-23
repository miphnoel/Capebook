import React from 'react';

const Intro = ({ user }) => {
  const details = Object.keys(user).map(key => <li>{key}: {user[key]}</li>)

  return (
    <div className="intro">
      <ul className="user-details">
        {details}
      </ul>
    </div>
  );
}

export default Intro;
