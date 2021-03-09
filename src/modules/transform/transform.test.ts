import { toMarkdown } from "./transform";

import {
  MERMAID_FLOW_CHART,
  MERMAID_FLOW_CHART_WITH_ONE_NODE,
  MERMAID_FLOW_CHART_WITH_TB_DIRECTION,
  MERMAID_FLOW_CHART_WITH_RECTANGULAR_SHAPE,
  MERMAID_FLOW_CHART_WITH_ARROW_CONNECTIONS,
  JSON_WITH_ROOT_AND_THREE_CHILDREN,
  JSON_WITH_ARROW_CONNECTIONS,
  JSON_WITH_SINGLE_NODE,
  JSON_WITH_TB_DIRECTION,
  JSON_WITH_RECTANGULAR_SHAPE,
} from "./fixtures";

describe("converting JSON into mermaid markdown", () => {
  it("should return string with multiple nodes", () => {
    expect(toMarkdown(JSON_WITH_ROOT_AND_THREE_CHILDREN)).toEqual(MERMAID_FLOW_CHART);
  });

  describe("with only root node", () => {
    it("should return string with one node", () => {
      expect(toMarkdown(JSON_WITH_SINGLE_NODE)).toEqual(MERMAID_FLOW_CHART_WITH_ONE_NODE);
    });
  });

  describe("Graph direction", () => {
    it("should return string with correct graph direction", () => {
      expect(toMarkdown(JSON_WITH_TB_DIRECTION)).toEqual(MERMAID_FLOW_CHART_WITH_TB_DIRECTION);
    });
  });

  describe("Graph - Node shape", () => {
    it("should return string with correct node shape", () => {
      expect(toMarkdown(JSON_WITH_RECTANGULAR_SHAPE)).toEqual(MERMAID_FLOW_CHART_WITH_RECTANGULAR_SHAPE);
    });
  });

  describe("Graph - Node connections", () => {
    it("should return string with correct node connections", () => {
      expect(toMarkdown(JSON_WITH_ARROW_CONNECTIONS)).toEqual(MERMAID_FLOW_CHART_WITH_ARROW_CONNECTIONS);
    });
  });
});
