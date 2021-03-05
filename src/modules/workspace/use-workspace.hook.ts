import mermaid from "mermaid";
import { useEffect, useCallback, useRef /* , useState */ } from "react";

export function useWorkspace() {
  const genericNodeHandler = useCallback((...args) => {
    /* tslint:disable no-console */
    console.log("generic", ...args);
  }, []);

  ((window as unknown) as {
    genericHandler: () => void;
  }).genericHandler = genericNodeHandler;

  const mermaidElement = useRef<HTMLDivElement>(null);
  // const [textContent, setTextContent] = useState(`graph TB\na-->b\nclick a genericHandler\nclick b genericHandler`);

  // const insertSVG = useCallback((svgCode, bindFunctions) => {
  //   const targetElement = mermaidElement.current;

  //   if (targetElement) {
  //     targetElement.innerHTML = svgCode;

  //     bindFunctions(targetElement);
  //   }
  // }, []);

  const initializeMermaid = useCallback(
    () => {
      mermaid.mermaidAPI.initialize({
        startOnLoad: false,
        securityLevel: "loose",
      });

      // const graph = mermaid.mermaidAPI.render("graph", textContent, insertSVG);
    },
    [
      /* insertSVG, textContent */
    ]
  );

  useEffect(() => {
    initializeMermaid();
  }, [initializeMermaid]);

  return {
    mermaidElement,
  };
}
