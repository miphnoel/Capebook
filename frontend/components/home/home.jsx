import React from 'react';

import NavBar from '../nav_bar/nav_bar';
import Feed from '../feed/feed';
import LeftColumn from './left_column';
import RightColumn from './right_column';

const Home = (props) => (
  <div className="home-page">
    <NavBar />
    <div className="main-content">
      <LeftColumn />
      <Feed />
      <RightColumn />
    </div>
  </div>
);

export default Home;
