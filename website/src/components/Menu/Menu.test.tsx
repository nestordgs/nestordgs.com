import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { Menu } from "./Menu";

// Mock logo import
jest.mock("../../logo.svg", () => "logo.svg");

describe("<Menu Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "en" }}>
        <Menu />
      </TranslationConext.Provider>
    );
  });

  it("Should contain Logo", () => {
    const logoComponent = screen.getByTestId("logo");
    expect(logoComponent).toBeInTheDocument();
  });

  it("Should render navigation items", () => {
    // Assuming keys are rendered directly by t() mock if not set up, 
    // but usually t(key) returns key if missing or configured that way in tests.
    // Based on sections.json: menu.experience, menu.projects, etc.
    expect(screen.getAllByText("menu.experience")[0]).toBeInTheDocument();
    expect(screen.getAllByText("menu.projects")[0]).toBeInTheDocument();
  });
});
