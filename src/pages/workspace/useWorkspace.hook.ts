import mermaid from "mermaid";
import { useEffect, useCallback, useRef, useState } from "react";
import { useParams } from "react-router";

import { DIAGRAM_TYPES } from "../../fixtures/consts";
import { useStores } from "../../hooks/useStores.hook";

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
  const [textContent] = useState(`graph TB\na-->b\nclick a genericHandler\nclick b genericHandler`);

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

    mermaid.mermaidAPI.render("graph", textContent, insertSVG);
  }, [insertSVG, textContent]);

  useEffect(() => {
    initializeMermaid();
  }, [initializeMermaid]);

  return {
    mermaidElement,
  };
}
