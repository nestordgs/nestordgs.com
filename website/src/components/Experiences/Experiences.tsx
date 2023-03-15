import React from "react";
import { useTranslation } from "react-i18next";
import { IExperience } from "./interfaces/intex";
import { ExperienceTitle } from "../utils/ExperienceTitle";
import { ExperienceDescription } from "./ExperienceDescription";
import { ExperienceTabs } from "./ExperienceTabs";
import { SectionTitle } from "../utils/SectionTitle/SectionTitle";

export const Experiences = () => {
  const { t } = useTranslation();

  const experiences: IExperience[] = [
    {
      dateFrom: "06/01/2022",
      title: "Senior Developer Consultant",
      company: "Thoughtworks",
      description: "experiences.tw",
    },
    {
      dateFrom: "06/01/2021",
      dateTo: "06/01/2022",
      title: "Full Stack Developer",
      company: "Option SPA",
      description: "experiences.option",
    },
    {
      dateFrom: "11/01/2019",
      dateTo: "05/01/2021",
      title: "Cloud Engineer",
      company: "Arkotech",
      description: "experiences.arkho",
    },
    {
      dateFrom: "06/01/2019",
      dateTo: "06/01/2019",
      title: "Full Stack Developer",
      company: "Karibu",
      description: "experiences.karibu",
    },
    {
      dateFrom: "04/01/2019",
      dateTo: "05/01/2019",
      title: "Front End Developer",
      company: "Ssilva Gestion Inmobiliaria",
      description: "experiences.ssilva",
    },
    {
      dateFrom: "01/01/2019",
      dateTo: "10/01/2018",
      title: "Full Stack Engineer",
      company: "Vendy",
      description: "experiences.vendy",
    },
    {
      dateFrom: "06/01/2019",
      dateTo: "11/01/2018",
      title: "Web Developer",
      company: "Develoop Software",
      description: "experiences.develoop",
    },
  ];

  return (
    <section className="container pb-5 pt-4">
      <SectionTitle text={t("experiences.title")} />
      <ExperienceTabs experiences={experiences} />
      <div className="tab-content" id="experiences-tabContent">
        {experiences.map((experience: IExperience, index: number) => {
          const { title, company, description } = experience;
          return (
            <div
              className={`tab-pane fade experience-content show ${
                index === 0 && "active"
              }`}
              id={`experience-${company.replaceAll(" ", "-")}`}
              role="tabpanel"
              key={`experience-content-${index}`}
              aria-labelledby={`experience-${company.replaceAll(
                " ",
                "-"
              )}-tab"`}
            >
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <ExperienceTitle
                      title={title}
                      numberOfWhiteSpaces={title.split(" ").length}
                      isActual={!index}
                    />
                  </div>
                  <ExperienceDescription
                    company={company}
                    description={description}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
