import { render, screen } from "@testing-library/react";
import { Aptitude } from "./Aptitude";
import { IAptitude } from "./interfaces";

describe("<Aptitudes Component />", () => {
  const aptitude: IAptitude = {
    title: "Testing",
    imageUrl: "https://unsplash.com/photos/s5kTY-Ve1c0",
  };
  beforeEach(() => {
    render(<Aptitude {...aptitude} />);
  });

  it("It should render aptitude title", () => {
    const titleElement = screen.getByText("Testing");
    expect(titleElement).toBeInTheDocument();
  });

  it("It should render aptitude image", () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", aptitude.imageUrl);
  });
});
