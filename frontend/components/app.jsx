import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Login from './login/login';
import Home from './home';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
