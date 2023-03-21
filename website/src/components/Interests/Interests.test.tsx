import { render, screen } from "@testing-library/react";
import { Interests } from "./Interests";

describe("<Aptitudes Component />", () => {
  beforeEach(() => {
    render(<Interests />);
  });

  it("It should render interests title", () => {
    const titleElement = screen.getByText("interests.title", { exact: false });
    expect(titleElement).toBeInTheDocument();
  });

  it("It should render interests description", () => {
    const description = screen.getByTestId("interests-description");
    expect(description).toBeInTheDocument();
  });
});
