import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { ExperienceDescription } from "./ExperienceDescription";

describe("<Menu Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <ExperienceDescription
          company="Company Name"
          description="This is my description"
        />
      </TranslationConext.Provider>
    );
  });

  it("Should Render Company Name", () => {
    const companyName = screen.getByTestId("company-name");

    expect(companyName).toBeInTheDocument();
  });

  it("Should Render Company Description", () => {
    const companyDescription = screen.getByTestId("company-description");

    expect(companyDescription).toBeInTheDocument();
  });
});
