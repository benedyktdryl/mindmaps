import { NODE_CONNECTIONS } from "./node-connections";
import { NODE_SHAPES } from "./node-shapes";

export function toMarkdown({ nodes, graphDirection, linkType, shapeType }: MarkdownGraphJsonSchema) {
  return [`graph ${graphDirection}`, ...buildNodes(nodes, linkType, shapeType)].join("\n");
}

function buildNodes(nodes: Array<GraphNode>, linkType: string, shapeType: string): Array<String> {
  if (nodes.length === 1) return [buildMarkdownNode(nodes[0], shapeType)];

  const rootNode = nodes.find(isRootNode);

  return nodes
    .filter((node) => !isRootNode(node))
    .map((node) => {
      const parent = nodes.find((elem) => node.parent && elem.key === node.parent) || rootNode;
      const parentNode = buildMarkdownNode(parent!, shapeType);
      const childNode = buildMarkdownNode(node, shapeType);

      return NODE_CONNECTIONS[linkType](parentNode, childNode);
    });
}

function buildMarkdownNode(node: GraphNode, shapeType: string): string {
  return `${node.key}${NODE_SHAPES[shapeType](node.text)}`;
}

function isRootNode(node: GraphNode): Boolean {
  return node.parent === undefined;
}
