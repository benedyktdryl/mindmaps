import { NODE_CONNECTIONS } from "./nodeConnections";
import { NODE_SHAPES } from "./nodeShapes";

export function jsonToMermaid({ nodes, graphDirection, linkType, shapeType }: MermaidGraphJsonSchema) {
  return [`graph ${graphDirection}`, ...buildMermaidNodes(nodes, linkType, shapeType)].join("\n");
}

function buildMermaidNodes(nodes: Array<GraphNode>, linkType: string, shapeType: string): Array<String> {
  if (nodes.length === 1) return [buildMermaidNode(nodes[0], shapeType)];

  let rootNode = nodes.find(isRootNode);
  return nodes
    .filter((node) => !isRootNode(node))
    .map((node) => {
      const parent = nodes.find((elem) => node.parent && elem.key === node.parent) || rootNode;
      const parentNode = buildMermaidNode(parent!, shapeType);
      const childNode = buildMermaidNode(node, shapeType);

      return NODE_CONNECTIONS[linkType](parentNode, childNode);
    });
}

function buildMermaidNode(node: GraphNode, shapeType: string): string {
  return `${node.key}${NODE_SHAPES[shapeType](node.text)}`;
}

function isRootNode(node: GraphNode): Boolean {
  return node.parent === undefined;
}
