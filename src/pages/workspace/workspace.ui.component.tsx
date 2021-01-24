import React from "react";

import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";

import { WorkspaceAddItem } from "./components/workspaceAddItem.component";

export interface WorkspaceProps {
  mermaidElement: React.RefObject<HTMLDivElement>;
}

export const Workspace: React.FC<WorkspaceProps> = (props) => {
  return (
    <Container maxWidth="md">
      <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }} ref={props.mermaidElement} />
      <WorkspaceAddItem />

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
