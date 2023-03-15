import { render, screen } from "@testing-library/react";
import { SectionTitle } from "./SectionTitle";

describe("<Menu Component />", () => {
  beforeEach(() => {
    render(<SectionTitle text="My Title" />);
  });

  it("Should Render Title", () => {
    const experiencesTitle = screen.getByTestId("section-title");

    expect(experiencesTitle).toBeInTheDocument();
  });

  it("Should Render Title", () => {
    const titleLine = screen.getByTestId("section-title-line");

    expect(titleLine).toBeInTheDocument();
  });
});
