import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../utils/SectionTitle/SectionTitle";
import { IStudy } from "./interfaces/IStudies";
import { Study } from "./ Study";

export const Studies = () => {
  const { t } = useTranslation();

  const listStudies: IStudy[] = [
    {
      title: "AWS Certified Developer - Associate",
      institute: "Amazon Web Services",
      dateFrom: "10/01/2020",
      dateTo: "10/01/2023",
      credentialId: "Z1HLWNXD1JV4QJS1",
      image: "../../../assets/aptitudes/aws.png",
    },
    {
      title: "Certified Linux Operator",
      institute: "Latinux Inc",
      dateFrom: "03/01/2016",
      credentialId: "VE3REG151B1CLO",
      image: "../../../assets/linux.png",
    },
    {
      title: "Javascript Specialization",
      institute: "Uneweb Instituto",
      dateFrom: "03/01/2017",
      image: "../../../assets/aptitudes/javascript.png",
    },
    {
      title: "Computer Engineer",
      institute: "Colegio Universitario de Caracas",
      dateFrom: "07/01/2014",
      image: "../../../assets/binary-code.png",
    },
  ];

  return (
    <section className="container pb-5 pt-4 px-0">
      <SectionTitle text={t("studies.title")} />
      <div className="studies-grid d-grid gap-3 ps-0 mb-0">
        {listStudies.map((studie: IStudy, index: number) => {
          return <Study {...studie} key={`study-${index}`} />;
        })}
      </div>
    </section>
  );
};
