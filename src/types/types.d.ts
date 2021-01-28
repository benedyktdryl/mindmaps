declare interface Item {
  type: string;
}

declare interface JsonSchema {
  nodes: Array<any>,
  graphDirection: string,
  linkType: string,
  shapeType: string
}

interface Converter {
  convert(): string
}

declare interface GraphNode {
  key: number,
  parent?: number,
  text: string
}
