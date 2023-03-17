import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { TranslationConext } from "../../translations";
import { Study } from "./ Study";
import { IStudy } from "./interfaces/IStudies";

describe("<Aptitudes Component />", () => {
  describe("With all Attributes", () => {
    const study: IStudy = {
      title: "Certification Ultra Testing",
      institute: "Testing Institute",
      dateFrom: "10/01/2020",
      dateTo: "10/01/2023",
      credentialId: "askfjhskf123qswdq123e",
      image: "../fakeImage.png",
    };

    beforeEach(() => {
      render(
        <TranslationConext.Provider value={{ language: "En" }}>
          <Study {...study} />
        </TranslationConext.Provider>
      );
    });

    it("It should render Study image", () => {
      const studyDatesTo = screen.getByTestId("study-image");
      expect(studyDatesTo).toBeInTheDocument();
    });

    it("It should render Study title", () => {
      const titleElement = screen.getByText(study.title);
      expect(titleElement).toBeInTheDocument();
    });

    it("It should render Study institute", () => {
      const studyInstitute = screen.getByText(study.institute);
      expect(studyInstitute).toBeInTheDocument();
    });

    it("It should render Study dates", () => {
      const studyDates = screen.getByTestId("study-dates");
      expect(studyDates).toBeInTheDocument();

      const studyDatesFrom = screen.getByText(
        dayjs(`${study.dateFrom}`).format("MMM YYYY")
      );
      expect(studyDatesFrom).toBeInTheDocument();

      if (study.dateTo) {
        const studyDatesTo = screen.getByText(
          dayjs(`${study.dateTo}`).format("MMM YYYY"),
          { exact: false }
        );
        expect(studyDatesTo).toBeInTheDocument();
      }
    });

    it("It should render Study credential", () => {
      if (study.credentialId) {
        const studyCredential = screen.getByText(study.credentialId, {
          exact: false,
        });
        expect(studyCredential).toBeInTheDocument();
      }
    });
  });

  describe("Without Credential", () => {
    const studyWithoutCredential: IStudy = {
      title: "AWS Certified Developer - Associate",
      institute: "Amazon Web Services",
      dateFrom: "10/01/2020",
    };
    beforeEach(() => {
      render(
        <TranslationConext.Provider value={{ language: "En" }}>
          <Study {...studyWithoutCredential} />
        </TranslationConext.Provider>
      );
    });

    it("It should NOT render Study Credential", () => {
      const studyCredential = screen.queryByTestId("study-credential");
      expect(studyCredential).not.toBeInTheDocument();
    });
  });

  describe("Without DateTo", () => {
    const studyWithoutDateTo: IStudy = {
      title: "AWS Certified Developer - Associate",
      institute: "Amazon Web Services",
      dateFrom: "10/01/2020",
      credentialId: "Z1HLWNXD1JV4QJS1",
    };
    beforeEach(() => {
      render(
        <TranslationConext.Provider value={{ language: "En" }}>
          <Study {...studyWithoutDateTo} />
        </TranslationConext.Provider>
      );
    });

    it("It should NOT render Study dates to", () => {
      if (studyWithoutDateTo.dateTo) {
        const studyDatesTo = screen.queryByTestId("study-dates-to");
        expect(studyDatesTo).toBeInTheDocument();
      }
    });
  });

  describe("Without Image", () => {
    beforeEach(() => {
      const studyWithoutImage: IStudy = {
        title: "AWS Certified Developer - Associate",
        institute: "Amazon Web Services",
        dateFrom: "10/01/2020",
        dateTo: "10/01/2023",
        credentialId: "Z1HLWNXD1JV4QJS1",
      };
      render(
        <TranslationConext.Provider value={{ language: "En" }}>
          <Study {...studyWithoutImage} />
        </TranslationConext.Provider>
      );
    });

    it("It should NOT render Study image", () => {
      const studyDatesTo = screen.queryByTestId("study-image");
      expect(studyDatesTo).not.toBeInTheDocument();
    });
  });
});
