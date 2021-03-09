export interface Item {
  type: string;
}

export interface MarkdownGraphJsonSchema {
  nodes: Array<GraphNode>;
  graphDirection: string;
  linkType: string;
  shapeType: string;
}

export interface GraphNode {
  key: number;
  parent?: number;
  text: string;
}
