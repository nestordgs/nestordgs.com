import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { ExperienceDescription } from "./ExperienceDescription";
import { Experiences } from "./Experiences";

describe("<Menu Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <Experiences />
      </TranslationConext.Provider>
    );
  });

  it("Should Render Title", () => {
    const experiencesTitle = screen.getByTestId("section-title");

    expect(experiencesTitle).toBeInTheDocument();
  });
});
