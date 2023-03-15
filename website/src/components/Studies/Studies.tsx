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
    },
    {
      title: "AWS Certified Developer - Associate",
      institute: "Amazon Web Services",
      dateFrom: "10/01/2020",
      dateTo: "10/01/2023",
      credentialId: "Z1HLWNXD1JV4QJS1",
    },
    {
      title: "AWS Certified Developer - Associate",
      institute: "Amazon Web Services",
      dateFrom: "10/01/2020",
      // dateTo: "10/01/2023",
      // credentialId: "Z1HLWNXD1JV4QJS1",
    },
    {
      title: "AWS Certified Developer - Associate",
      institute: "Amazon Web Services",
      dateFrom: "10/01/2020",
      // dateTo: "10/01/2023",
      // credentialId: "Z1HLWNXD1JV4QJS1",
    },
  ];

  return (
    <section className="container pb-5 pt-4">
      <SectionTitle text={t("studies.title")} />
      <div className="studies-grid d-grid gap-3 ps-0 mb-0">
        {listStudies.map((studie: IStudie, index: number) => {
          return (
            <article className="studie-item" key={`studies-${index}`}>
              <img
                src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
                className="card-img-top img-fluid rounded-start aptitude-img"
                style={
                  {
                    // maxHeight: 80,
                    // maxWidth: 80,
                  }
                }
              />
              <h2 className="fs-3">{studie.title}</h2>
              <p>{studie.institute}</p>
              <p>
                {dayjs(studie.dateFrom).format("MMM YYYY")}
                {studie.dateTo &&
                  ` - ${dayjs(studie.dateTo).format("MMM YYYY")}`}
              </p>
              {studie.credentialId && (
                <p>Credential ID: {studie.credentialId}</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
