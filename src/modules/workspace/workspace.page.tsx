import { useWorkspace } from "./useWorkspace.hook";
import { Workspace } from "./workspace.ui.component";

export function WorkspacePage(props: {}) {
  const { mermaidElement } = useWorkspace();

  return <Workspace {...props} mermaidElement={mermaidElement} />;
}
