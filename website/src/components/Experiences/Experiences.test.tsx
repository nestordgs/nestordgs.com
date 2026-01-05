import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { Experiences } from "./Experiences";

// Mock FontAwesome
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <span>Icon</span>,
    faCalendarAlt: {},
}));

describe("<Experiences Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <Experiences />
      </TranslationConext.Provider>
    );
  });

  it("Should Render Title", () => {
    const experiencesTitle = screen.getByText("experiences.title");
    expect(experiencesTitle).toBeInTheDocument();
  });
  
  it("Should render timeline items", () => {
      expect(screen.getByText("experiences.tw")).toBeInTheDocument();
      expect(screen.getByText("experiences.option")).toBeInTheDocument();
  });
});
