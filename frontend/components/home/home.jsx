import React from 'react';

import NavBarContainer from '../shared/nav_bar_container';
import Feed from '../shared/feed';
import LeftColumn from './left_column';
import RightColumn from './right_column';

const Home = (props) => (
  <div className="home-page">
    <NavBarContainer />
    <div className="main-content">
      <LeftColumn />
      <Feed />
      <RightColumn />
    </div>
  </div>
);

export default Home;
