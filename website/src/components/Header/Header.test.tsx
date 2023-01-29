import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("<Header Component />", () => {
  beforeEach(() => {
    render(<Header />);
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
