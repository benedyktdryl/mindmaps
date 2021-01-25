import React from "react";
import { WorkspaceStore } from "../stores/workspace.store";

export const storesContext = React.createContext({
  workspaceStore: new WorkspaceStore(),
});
