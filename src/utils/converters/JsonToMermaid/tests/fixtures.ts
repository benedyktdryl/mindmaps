export const MERMAID_FLOW_CHART =
`graph LR
0(Root) --- 1(child1)
1(child1) --- 2(child1-2)
1(child1) --- 3(child1-3)`

export const MERMAID_FLOW_CHART_WITH_ARROW_CONNECTIONS =
`graph LR
0(Root)-->1(child1)
1(child1)-->2(child1-2)
1(child1)-->3(child1-3)`

export const MERMAID_FLOW_CHART_WITH_ONE_NODE =
`graph LR
0(Root)`

export const MERMAID_FLOW_CHART_WITH_TB_DIRECTION =
`graph TB
0(Root)`

export const MERMAID_FLOW_CHART_WITH_RECTANGULAR_SHAPE =
`graph TB
0[Root]`

export const JSON_WITH_ROOT_AND_THREE_CHILDREN = {
  graphDirection: 'LR',
  linkType: 'openLink',
  shapeType: 'round',
  nodes: [
    { key: 0, text: "Root" },
    { key: 1, parent: 0, text: "child1" },
    { key: 2, parent: 1, text: "child1-2" },
    { key: 3, parent: 1, text: "child1-3" }
  ]
}

export const JSON_WITH_ARROW_CONNECTIONS = {
  graphDirection: 'LR',
  linkType: 'arrowLink',
  shapeType: 'round',
  nodes: [
    { key: 0, text: "Root" },
    { key: 1, parent: 0, text: "child1" },
    { key: 2, parent: 1, text: "child1-2" },
    { key: 3, parent: 1, text: "child1-3" }
  ]
}

export const JSON_WITH_SINGLE_NODE = {
  graphDirection: 'LR',
  linkType: 'openLink',
  shapeType: 'round',
  nodes: [
    { key: 0, text: "Root" }
  ]
}

export const JSON_WITH_TB_DIRECTION = {
  graphDirection: 'TB',
  linkType: 'openLink',
  shapeType: 'round',
  nodes: [
    { key: 0, text: "Root" }
  ]
}

export const JSON_WITH_RECTANGULAR_SHAPE = {
  graphDirection: 'TB',
  linkType: 'openLink',
  shapeType: 'rectangular',
  nodes: [
    { key: 0, text: "Root" }
  ]
}
