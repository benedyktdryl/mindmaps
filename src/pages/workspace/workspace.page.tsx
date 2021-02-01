import { useWorkspace, Workspace } from "../../modules/workspace";
export function WorkspacePage(props: {}) {
  const { mermaidElement } = useWorkspace();

  return <Workspace {...props} mermaidElement={mermaidElement} />;
}
