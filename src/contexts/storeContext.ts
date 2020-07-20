import React from 'react';
import { WorkspaceStore } from '../stores/WorkspaceStore';

export const storesContext = React.createContext({
  workspaceStore: new WorkspaceStore(),
});
