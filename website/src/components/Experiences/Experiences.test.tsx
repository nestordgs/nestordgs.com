import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TranslationConext } from "../../translations";
import { Experiences } from "./Experiences";

// Mock FontAwesome
vi.mock("@fortawesome/react-fontawesome", () => ({
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

  it("Should expand and collapse list when clicking View More/Less", async () => {
      // Mock scrollIntoView
      window.HTMLElement.prototype.scrollIntoView = vi.fn();

      // "View More" button should be present initially
      const viewMoreButton = screen.getByText("experiences.view_more");
      expect(viewMoreButton).toBeInTheDocument();

      // Click to expand
      fireEvent.click(viewMoreButton);
      
      // Should now show all items (e.g. "experiences.early_career")
      expect(await screen.findByText("experiences.jobs.early_career.title")).toBeInTheDocument();
      
      // Should now show "View Less"
      const viewLessButton = screen.getByText("experiences.view_less");
      expect(viewLessButton).toBeInTheDocument();
      
      // Click to collapse
      fireEvent.click(viewLessButton);
      
      // Should hide early career again
      // waitForElementToBeRemoved is safer for disappearance
      // but queryByText works if we wait enough or assume synchronous if act handled it. 
      // safe bet:
      expect(screen.queryByText("experiences.jobs.early_career.title")).not.toBeInTheDocument();
  });
});
