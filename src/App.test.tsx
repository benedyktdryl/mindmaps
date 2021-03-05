import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render", () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
});
