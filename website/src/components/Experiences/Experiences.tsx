import React from "react";
import { useTranslation } from "react-i18next";
import { IExperience } from "./interfaces/intex";
import { ExperienceTitle } from "../utils/ExperienceTitle";
import { ExperienceDescription } from "./ExperienceDescription";
import { ExperienceTabs } from "./ExperienceTabs";

export const Experiences = () => {
  const { t } = useTranslation();

  const experiences: IExperience[] = [
    {
      dateFrom: "06/01/2022",
      title: "Senior Developer Consultant",
      company: "Thoughtworks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente enim architecto consectetur eum at quaerat, fugiat voluptatibus quia deserunt iure eaque est voluptates consequuntur quos error accusamus reprehenderit tempora",
    },
    {
      dateFrom: "06/01/2021",
      dateTo: "06/01/2022",
      title: "Full Stack Developer",
      company: "Option SPA",
      description: `Desarrollo de aplicaciones web haciendo uso de ReactJs como librería de Front-end.

      En cuanto a Back-end se hace uso de Docker container en conjunto con el framework Python Flask para generar una API que será orquestada por Fargate en AWS. Dicha aplicación contempla la generación de Dashboard para mostrar la información procesada por los ETL.`,
    },
    {
      dateFrom: "11/01/2019",
      dateTo: "05/01/2021",
      title: "Cloud Engineer",
      company: "Arkotech",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente enim architecto consectetur eum at quaerat, fugiat voluptatibus quia deserunt iure eaque est voluptates consequuntur quos error accusamus reprehenderit tempora",
    },
    {
      dateFrom: "06/01/2019",
      dateTo: "06/01/2019",
      title: "Full Stack Developer",
      company: "Karibu",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente enim architecto consectetur eum at quaerat, fugiat voluptatibus quia deserunt iure eaque est voluptates consequuntur quos error accusamus reprehenderit tempora",
    },
    {
      dateFrom: "01/01/2019",
      dateTo: "10/01/2018",
      title: "Full Stack Engineer",
      company: "Vendy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente enim architecto consectetur eum at quaerat, fugiat voluptatibus quia deserunt iure eaque est voluptates consequuntur quos error accusamus reprehenderit tempora",
    },
    {
      dateFrom: "06/01/2019",
      dateTo: "11/01/2018",
      title: "Web Developer",
      company: "Develoop Software",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente enim architecto consectetur eum at quaerat, fugiat voluptatibus quia deserunt iure eaque est voluptates consequuntur quos error accusamus reprehenderit tempora",
    },
  ];

  return (
    <div className="container py-5">
      <h2
        className="experiences-title pb-2 d-inline-block mb-5"
        data-testid="experiences-title"
      >
        {t("experiences.title")}.
        <span className="experiences-title-line bg-menu-color-bar" />
      </h2>
      <ExperienceTabs experiences={experiences} />
      <div className="tab-content" id="experiences-tabContent">
        {experiences.map((experience: IExperience, index: number) => {
          const { title, company, description } = experience;
          return (
            <div
              className={`tab-pane fade experience-content show ${
                index === 0 && "active"
              }`}
              id={`experience-${company.replace(" ", "-")}`}
              role="tabpanel"
              key={`experience-content-${index}`}
              aria-labelledby={`experience-${company.replace(" ", "-")}-tab"`}
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
    </div>
  );
};
