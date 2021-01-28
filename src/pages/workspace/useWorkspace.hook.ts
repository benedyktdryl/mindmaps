import mermaid from "mermaid";
import { useEffect, useCallback, useRef, useState } from "react";
import { useParams } from "react-router";

import { DIAGRAM_TYPES } from "../../fixtures/consts";
import { useStores } from "../../hooks/useStores.hook";
import { jsonToMermaid } from "../../utils/converters/JsonToMermaid/jsonToMermaid";

export function useWorkspace() {
  const { type } = useParams<{ type: DIAGRAM_TYPES }>();
  const { workspaceStore } = useStores();

  useEffect(() => {
    workspaceStore.setType(type);
  }, [type, workspaceStore]);

  const genericNodeHandler = useCallback((...args) => {
    /* tslint:disable no-console */
    console.log("generic", ...args);
  }, []);

  ((window as unknown) as {
    genericHandler: () => void;
  }).genericHandler = genericNodeHandler;

  const mermaidElement = useRef<HTMLDivElement>(null);
  let data = {
    graphDirection: "LR",
    linkType: "openLink",
    shapeType: "round",
    nodes: [
      { key: 0, text: "Root" },
      { key: 1, parent: 0, text: "child1" },
      { key: 2, parent: 1, text: "child1-2" },
      { key: 3, parent: 1, text: "child1-3" },
      { key: 4, parent: 2, text: "child2-3" },
      { key: 5, parent: 2, text: "child2-4" },
      { key: 6, parent: 2, text: "child2-5" },
      { key: 7, parent: 0, text: "child3-1" },
      { key: 8, parent: 1, text: "child2-4" },
      { key: 9, parent: 3, text: "child2-5" },
      { key: 10, parent: 1, text: "child3-1" },
      { key: 11, parent: 0, text: "child4-1" },
      { key: 12, parent: 11, text: "child4-1-1" },
      { key: 13, parent: 11, text: "child4-1-2" },
      { key: 14, parent: 11, text: "child4-1-3" },
      { key: 15, parent: 11, text: "child4-1-4" },
      { key: 16, parent: 12, text: "child4-1-1-2" },
    ],
  };

  const [textContent, setTextContent] = useState(jsonToMermaid(data));

  const insertSVG = useCallback((svgCode, bindFunctions) => {
    const targetElement = mermaidElement.current;

    if (targetElement) {
      targetElement.innerHTML = svgCode;

      bindFunctions(targetElement);
    }
  }, []);

  const initializeMermaid = useCallback(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: false,
      securityLevel: "loose",
    });

    const graph = mermaid.mermaidAPI.render("graph", textContent, insertSVG);
  }, [insertSVG, textContent]);

  useEffect(() => {
    initializeMermaid();
  }, [initializeMermaid]);

  return {
    mermaidElement,
  };
}
