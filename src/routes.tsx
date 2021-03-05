import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { WorkspacePage } from "./modules/workspace/workspace.page.component";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={WorkspacePage} />
      </Switch>
    </Router>
  );
}
