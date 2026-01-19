import React from "react";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

test("renders learn react link", () => {
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    clearRect: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
  }) as any;

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      addListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });

  render(<App />);
});
