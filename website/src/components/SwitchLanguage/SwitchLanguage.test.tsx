import { render, screen } from "@testing-library/react";
import { TranslationConext } from "../../translations";
import { SwitchLanguage } from "./SwitchLanguage";

describe("<Language Switch Component />", () => {
  describe("Switch is Checked", () => {
    beforeEach(() => {
      render(
        <TranslationConext.Provider value={{ language: "es" }}>
          <SwitchLanguage label="EN" isChecked={true} onClick={() => {}} />
        </TranslationConext.Provider>
      );
    });

    it("Should render English Language", () => {
      expect(screen.getByText("EN")).toBeInTheDocument();
    });
  });

  describe("Switch is NOT Checked", () => {
    beforeEach(() => {
      render(
        <TranslationConext.Provider value={{ language: "es" }}>
          <SwitchLanguage label="ES" isChecked={false} onClick={() => {}} />
        </TranslationConext.Provider>
      );
    });

    it("Should render Spanish Language", () => {
       // Since logic is isChecked ? "EN" : "ES", false means "ES"
      expect(screen.getByText("ES")).toBeInTheDocument();
    });
  });
});
