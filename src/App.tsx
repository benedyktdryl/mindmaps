import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Workspace } from './pages/Workspace';
import { SelectType } from './pages/SelectType';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/workspace/:type" component={Workspace} />
          <Route path="/select-type" component={SelectType} />
          <Route path="/" component={SelectType} />
          <Route component={SelectType} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
