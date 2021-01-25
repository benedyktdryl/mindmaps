declare interface Item {
  type: string;
}

declare interface JsonSchema {
  nodes: Array<any>,
  graphDirection: string
}

interface Converter {
  data: JsonSchema,
  convert(): string
}

declare interface GraphNode {
  key: number,
  parent?: number,
  text: string
}
