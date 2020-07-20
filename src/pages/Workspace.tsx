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
  const [textContent, setTextContent] = useState(
    `graph TB\na-->b\nclick a genericHandler\nclick b genericHandler`,
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
