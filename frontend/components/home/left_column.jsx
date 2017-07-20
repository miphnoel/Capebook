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
        <li>
          <Link to={'/'}>
          <i className="fa fa-newspaper-o fa-fw wide" aria-hidden="true"></i>
          News Feed
          </Link>
        </li>
        <li className="divider">
          Explore
        </li>
        <li>
          <a
            href='http://www.michaelnoel.us'
            target='_blank'>
            <i className="fa fa-address-card fa-fw wide" aria-hidden="true"></i>
            Portfolio
        </a>
        </li>
        <li>
          <a
            href='http://github.com/miphnoel'
            target='_blank'>
            <i className="fa fa-github fa-fw" aria-hidden='true'></i>
            Github
        </a>
        </li>
        <li>
          <a
            href='http://www.linkedin.com/in/michael-noel'
            target='_blank'>
            <i className="fa fa-linkedin fa-fw" aria-hidden='true'></i>
            LinkedIn
        </a>
        </li>
        <li>
          <a
            href='http://www.angel.co/michael-noel-3'
            target='_blank'>
            <i className="fa fa-angellist fa-fw" aria-hidden='true'></i>
            AngelList
        </a>
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
