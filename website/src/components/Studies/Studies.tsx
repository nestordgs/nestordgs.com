import React from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../utils/SectionTitle/SectionTitle";
import { IStudie } from "./interfaces/IStudies";

export const Studies = () => {
  const { t } = useTranslation();

  const listStudies: IStudie[] = [
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
        {listStudies.map((studie: IStudie, index: number) => {
          return (
            <article className="card studie-item pt-3" key={`studies-${index}`}>
              <img
                src={studie.image}
                className="mx-auto img-fluid card-img-top rounded-start study-img"
                alt={studie.title}
              />
              <div className="card-body">
                <h2 className="fs-4">{studie.title}</h2>
                <p>{studie.institute}.</p>
                <p className="text-capitalize">
                  {dayjs(studie.dateFrom).format("MMM YYYY")}
                  {studie.dateTo &&
                    ` - ${dayjs(studie.dateTo).format("MMM YYYY")}`}
                </p>
                {studie.credentialId && (
                  <p>Credential ID: {studie.credentialId}</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
