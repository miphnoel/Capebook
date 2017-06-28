import React from 'react';
import { connect } from 'react-redux';

const Intro = ({ user }) => {
  const { profile } = user;
  const details = [];

  if (profile.job || profile.workplace) {
    let work;
    if (profile.job && profile.workplace) {
      work = `${profile.job} at ${profile.workplace}`
    } else if (profile.job) {
      work = `${profile.job}`
    } else if (profile.workplace) {
      work = `Works at ${profile.workplace}`
    }
    details.push(<li key="work">
      <i className="fa fa-briefcase" aria-hidden="true"></i>
      <span>{work}</span>
    </li>);
  }

  if (profile.education) {
    details.push(<li key="ed">
      <i className="fa fa-graduation-cap" aria-hidden="true"></i>
      <span>Studied at {profile.education}</span>
    </li>);
  }

  if (profile.location) {
    details.push(<li key="city">
      <i className="fa fa-home" aria-hidden="true"></i>
      <span>Lives in {profile.location}</span>
    </li>);
  }

  if (profile.hometown) {
    details.push(<li key="from">
      <i className="fa fa-map-marker" aria-hidden="true"></i>
      <span>From {profile.hometown}</span>
    </li>);
  }

  return (
    <div className="intro">
      <div className="intro-header">
        <i className="fa fa-globe globe" aria-hidden="true"></i>
        <span>Intro</span>
      </div>
      <ul className="user-details">
        <li key="alignment">
          <i className="fa fa-superpowers" aria-hidden="true"></i>
          <span>{user.alignment}</span>
        </li>
        <li key="dob">
          <i className="fa fa-birthday-cake" aria-hidden="true"></i>
          <span>{user.dob}</span>
        </li>
        {details}
        <li key="since">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>Joined {user.join_date}</span>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  user: users.user,
});

export default connect(
  mapStateToProps,
  null
)(Intro);
