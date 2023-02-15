import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { Menu } from "./Menu";

describe("<Menu Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <Menu />
      </TranslationConext.Provider>
    );
  });

  it("Should Render Menu", () => {
    const headerComponent = screen.getByTestId("header-page");

    expect(headerComponent).toBeInTheDocument();
  });

  it("Should contain Logo", () => {
    const logoComponent = screen.getByTestId("logo");

    expect(logoComponent).toBeInTheDocument();
  });

  it("Should menu component", () => {
    const menuComponent = screen.getByTestId("menu-component");

    expect(menuComponent).toBeInTheDocument();

    expect(menuComponent.children).toHaveLength(5);
  });
});
