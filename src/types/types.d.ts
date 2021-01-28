declare interface Item {
  type: string;
}

declare interface MermaidGraphJsonSchema {
  nodes: Array<any>;
  graphDirection: string;
  linkType: string;
  shapeType: string;
}

declare interface GraphNode {
  key: number;
  parent?: number;
  text: string;
}
