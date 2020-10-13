import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

function AppRouter() {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="*">
          <div>Not Found</div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default AppRouter;
