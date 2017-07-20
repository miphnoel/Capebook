import React from 'react';
import { Switch } from 'react-router-dom';

import Login from './login/login';
import Home from './home/home';
import Profile from './profile/profile';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path='/profile/:userId' component={Profile} />
    </Switch>
  </div>
);

export default App;
