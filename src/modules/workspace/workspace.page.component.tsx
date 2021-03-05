import React from "react";

import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";

import { useWorkspace } from "./use-workspace.hook";
import { WorkspaceToolbar } from "./workspace-toolbar.component";

export const WorkspacePage: React.FC = () => {
  const { mermaidElement } = useWorkspace();

  return (
    <Container>
      <WorkspaceToolbar />
      <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }} ref={mermaidElement} />
      <Drawer
        variant="persistent"
        anchor="right"
        open
        onClose={() => {
          /* tslint:disable no-console */
          console.log("foo");
        }}
      >
        foo
      </Drawer>
    </Container>
  );
};
