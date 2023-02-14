import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { Header } from "./Header";

describe("<Header Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <Header />
      </TranslationConext.Provider>
    );
  });

  it("Should Render Header", () => {
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
