import { useWorkspace } from "./useWorkspace.hook";
import { Workspace, WorkspaceProps } from "./workspace.ui.component";

function withWorkspace(Component: React.FC<WorkspaceProps>) {
  return function (props: {}) {
    const { mermaidElement } = useWorkspace();

    return <Component {...props} mermaidElement={mermaidElement} />;
  };
}

export const WorkspacePage = withWorkspace(Workspace);
