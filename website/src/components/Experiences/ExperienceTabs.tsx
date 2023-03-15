import React, { useContext, useEffect } from "react";
import { IExperience, IExperienceTabs } from "./interfaces/intex";
import dayjs from "dayjs";

import "dayjs/locale/es";
import "dayjs/locale/en";
import { TranslationConext } from "../../translations";
import { useTranslation } from "react-i18next";

dayjs.locale("es");

export const ExperienceTabs: React.FC<IExperienceTabs> = ({ experiences }) => {
  const { language } = useContext(TranslationConext);
  const { t } = useTranslation();

  useEffect(() => {
    if (language === "es") {
      dayjs.locale("es");
    } else {
      dayjs.locale("en");
    }
  }, [language]);

  return (
    <ul
      className="nav nav-pills mb-3 nav-justifiedd flex-nowrap experiences-tabs pb-3"
      id="experience-tab"
      role="tablist"
      data-testid="experiences-list-tabs"
    >
      {experiences.map((experience: IExperience, index: number) => {
        const { dateFrom, dateTo, company } = experience;
        return (
          <li
            className={`nav-item border text-white rounded-pill text-center experience py-1 ${
              index === 0 && "active"
            }`}
            key={`experience-${index}`}
            data-bs-toggle="pill"
            data-bs-target={`#experience-${company.replaceAll(" ", "-")}`}
          >
            <button
              className="btn btn-primary text-capitalize px-0 text-white"
              id="experience-profile-tab"
              type="button"
              role="tab"
              aria-controls="experience-profile"
              aria-selected="false"
            >
              {dayjs(dateFrom).format("MMM YYYY")} -{" "}
              {dateTo
                ? dayjs(dateTo).format("MMM YYYY")
                : t("experiences.actual")}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
