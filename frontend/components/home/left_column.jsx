import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LeftColumn = ({ currentUser }) => {

  return (
    <div className="left-col">
      <ul className="left-col-links">
        <li>
          <Link to={`/profile/${currentUser.id}`}>
          <img src={currentUser.prof_pic} />
          {`${currentUser.first_name} ${currentUser.last_name}`}
          </Link>
        </li>
      </ul>
    </div>
  )
}

const mapStatetoProps = ({ session }) => ({
  currentUser: session.currentUser,
});


export default connect(
  mapStatetoProps,
  null
)(LeftColumn);
