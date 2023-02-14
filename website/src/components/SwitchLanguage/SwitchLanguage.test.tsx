import { fireEvent, render, screen } from "@testing-library/react";
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

    it("Should be checked", () => {
      expect(screen.getByTestId("language-switch")).toBeChecked();
    });

    it("Should render English Language", () => {
      expect(screen.getByTestId("language-switch")).toHaveAttribute(
        "data-language",
        "EN"
      );
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

    it("Should be checked", () => {
      expect(screen.getByTestId("language-switch")).not.toBeChecked();
    });

    it("Should render English Language", () => {
      expect(screen.getByTestId("language-switch")).toHaveAttribute(
        "data-language",
        "ES"
      );
    });
  });
});
