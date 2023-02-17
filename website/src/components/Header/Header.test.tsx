import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { Header } from "./Header";

describe("<Header Component />", () => {
  beforeEach(() => {
    HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
      clearRect: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
    });
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <Header />
      </TranslationConext.Provider>
    );
  });

  it("Should render canvas", () => {
    const canvasBg = screen.getByTestId("canvas-grid-bg");
    expect(canvasBg).toBeInTheDocument();
  });

  it("Should render letter N component", () => {
    const letterNComponent = screen.getByRole("letter-n");
    expect(letterNComponent).toBeInTheDocument();
  });

  it("Should Have text aptitudes", () => {
    expect(screen.getByText("aptitudes.im")).toBeInTheDocument();
    expect(screen.getByText("aptitudes.description")).toBeInTheDocument();
  });
});
