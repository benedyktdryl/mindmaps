import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { WorkspacePage } from "./workspace/workspace.page";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/workspace/:type" component={WorkspacePage} />
        <Route path="/" component={() => <Link to="/workspace/flowchart">Go to workspace</Link>} />
        <Route component={() => <Link to="/workspace/flowchart">Go to workspace</Link>} />
      </Switch>
    </Router>
  );
}
