import { NODE_CONNECTIONS } from "./nodeConnections";
import { NODE_SHAPES } from "./nodeShapes";

export class JsonToMermaid implements Converter {
  data:      JsonSchema
  nodes:     Array<GraphNode | any>;
  direction: string;
  linkType:  string;
  shapeType: string;

  constructor(data: JsonSchema) {
    this.data      = data
    this.nodes     = data['nodes'];
    this.direction = data['graphDirection'];
    this.linkType  = data['linkType'];
    this.shapeType = data['shapeType'];
  }

  convert(): string {
    let mermaidGraphDeclaration =`graph ${this.direction}`;
    let mermaidNodes = this.mermaidNodes(this.nodes);
    mermaidNodes.unshift(mermaidGraphDeclaration);

    return mermaidNodes.join('\n');
  }

  private mermaidNodes(nodes: Array<GraphNode | any>): Array<any> {
    if (nodes.length === 1) return [this.buildMermaidNode(nodes[0])];

    return nodes.filter(this.filterRootNode).map(this.buildMermaidNodesConnection, this)
  }

  private parentNode(node: GraphNode) {
    return this.nodes.find(elem => elem.key === node.parent);
  }

  private filterRootNode(node: any): Boolean {
    return node.parent !== undefined;
  }

  private buildMermaidNode(node: GraphNode): string {
    return `${node.key}${NODE_SHAPES[this.shapeType](node.text)}`
  }

  private buildMermaidNodesConnection(node: GraphNode): string {
    let parentNode  = this.buildMermaidNode(this.parentNode(node));
    let childNode   = this.buildMermaidNode(node);

    return NODE_CONNECTIONS[this.linkType](parentNode, childNode)
  }
}
