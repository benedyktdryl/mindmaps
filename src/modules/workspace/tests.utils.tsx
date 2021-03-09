import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter, MemoryRouterProps } from "react-router";

interface WrapperArgs extends Omit<RenderOptions, "queries"> {
  memoryRouterProps?: MemoryRouterProps;
}

export function renderWithRouter(ui: React.ReactNode, options?: WrapperArgs) {
  const { memoryRouterProps, ...renderOptions } = options ?? {};
  return {
    ...render(<MemoryRouter {...memoryRouterProps}>{ui}</MemoryRouter>, renderOptions),
  };
}
