export class JsonToMermaid implements Converter {
  data: JsonSchema;
  nodesArray: Array<GraphNode>;
  graphDirection: String;

  constructor(data: JsonSchema) {
    this.data           = data;
    this.nodesArray     = data['nodes'];
    this.graphDirection = data['graphDirection'];
  }

  convert(): string {
    let finalArray = [`graph ${this.graphDirection}`];

    this.nodesArray
      .filter(this.filterRootNode)
      .forEach(element => {
        let parent = this.findParentNode(element.parent);
         finalArray.push(`${this.buildMermaidNode(parent)} --- ${this.buildMermaidNode(element)}`);
      })

      console.log(finalArray);
    return finalArray.filter(Boolean).join('\n');
  }

  private buildMermaidNode(node: GraphNode): string {
    return `${node.key}(${node.text})`
  }

  private findParentNode(parentId: number) {
    return this.nodesArray.find(elem => elem.key === parentId);
  }

  private filterRootNode(node: any): Boolean {
    return node.parent !== undefined;
  }
}
