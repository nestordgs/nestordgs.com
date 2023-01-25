import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("<Header Component />", () => {
  it("Should Render Header", () => {
    render(<Header />);

    const headerComponent = screen.getByTestId("header-page");

    expect(headerComponent).toBeInTheDocument();
  });
});
