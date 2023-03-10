import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { ExperienceTabs } from "./ExperienceTabs";

describe("<Menu Component />", () => {
  beforeEach(() => {
    render(
      <TranslationConext.Provider value={{ language: "es" }}>
        <ExperienceTabs experiences={[]} />
      </TranslationConext.Provider>
    );
  });

  it("Should Render List Experiences", () => {
    const companyDescription = screen.getByTestId("experiences-list-tabs");

    expect(companyDescription).toBeInTheDocument();
  });
});
