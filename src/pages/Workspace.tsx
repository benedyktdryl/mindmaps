import * as React from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { useContext, useRef, useCallback, useState, useEffect } from 'react';

import mermaid from 'mermaid';

import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';

import { WorkspaceAddItem } from '../components/WorkspaceAddItem';
import { useStores } from '../hooks/useStores';
import { DIAGRAM_TYPES } from '../utils/consts';
import { JsonToMermaid } from '../utils/converters/JsonToMermaid/JsonToMermaid';

interface Props {}

export const Workspace: React.FC<Props> = (props) => {
  const { type } = useParams<{ type: DIAGRAM_TYPES }>();
  const { workspaceStore } = useStores();

  useEffect(() => {
    workspaceStore.setType(type);
  }, [type]);

  const genericNodeHandler = useCallback((...args) => {
    /* tslint:disable no-console */
    console.log('generic', ...args);
  }, []);

  ((window as unknown) as {
    genericHandler: () => void;
  }).genericHandler = genericNodeHandler;

  const mermaidElement = useRef(null);
  let data = {
    graphDirection: 'TB',
    linkType: 'openLink',
    shapeType: 'stadium',
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
    ]
  }

  let converter = new JsonToMermaid(data);
  const [textContent, setTextContent] = useState(
    converter.convert()
  );

  const insertSVG = useCallback((svgCode, bindFunctions) => {
    const targetElement = ((mermaidElement as unknown) as React.MutableRefObject<
      HTMLDivElement
    >).current;

    targetElement.innerHTML = svgCode;

    bindFunctions(targetElement);
  }, []);

  const initializeMermaid = useCallback(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
    });

    const graph = mermaid.mermaidAPI.render('graph', textContent, insertSVG);
  }, [textContent]);

  useEffect(() => {
    initializeMermaid();
  }, [initializeMermaid]);

  return (
    <Container maxWidth="md">
      <div
        style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        ref={mermaidElement}
      />
      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
      <WorkspaceAddItem />

      <Drawer
        variant="persistent"
        anchor="right"
        open
        onClose={() => {
          /* tslint:disable no-console */
          console.log('foo');
        }}
      >
        foo
      </Drawer>
    </Container>
  );
};
