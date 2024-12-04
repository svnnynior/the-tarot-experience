import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test that the testing functionality works", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });

  it("should be false", () => {
    expect(false).toBe(false);
  });

  it("renders headline", () => {
    render(<App />);

    screen.debug();
  });
});
