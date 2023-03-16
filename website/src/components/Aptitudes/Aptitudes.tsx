import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../utils/SectionTitle/SectionTitle";
import { Aptitude } from "./Aptitude";
import { IAptitude } from "./interfaces";

export const Aptitudes: React.FC = () => {
  const { t } = useTranslation();

  const listAptitudes: IAptitude[] = [
    {
      title: "Amazon Web Services (AWS)",
      imageUrl: "../../../assets/aptitudes/aws-white.png",
    },
    {
      title: "Azure",
      imageUrl: "../../../assets/aptitudes/azure.png",
    },
    {
      title: "Google Cloud Platform (GCP)",
      imageUrl: "../../../assets/aptitudes/gcp.png",
    },
    {
      title: "Docker",
      imageUrl: "../../../assets/aptitudes/docker.png",
    },
    {
      title: "Kubernetes",
      imageUrl: "../../../assets/aptitudes/k8.png",
    },
    {
      title: "Python",
      imageUrl: "../../../assets/aptitudes/python.png",
    },
    {
      title: "JavaScript",
      imageUrl: "../../../assets/aptitudes/javascript.png",
    },
    {
      title: "Typescript",
      imageUrl: "../../../assets/aptitudes/typescript.png",
    },
    {
      title: "SQL",
      imageUrl: "../../../assets/aptitudes/sql.png",
    },
    {
      title: "ReactJs",
      imageUrl: "../../../assets/aptitudes/react.png",
    },
    {
      title: "Angular",
      imageUrl: "../../../assets/aptitudes/angular.png",
    },
    {
      title: "NodeJs",
      imageUrl: "../../../assets/aptitudes/nodejs.png",
      colorClass: "difference",
    },
    {
      title: "VueJs",
      imageUrl: "../../../assets/aptitudes/vue.png",
    },
    {
      title: "Unit Tests",
      imageUrl: "../../../assets/aptitudes/unit-testing.png",
    },
    {
      title: "Github Actions",
      imageUrl: "../../../assets/aptitudes/gactions.png",
    },
  ];

  return (
    <>
      <section className="container py-5 px-0">
        <SectionTitle text={t("aptitudes.title")} />
        <div className="aptitudes-grid d-grid gap-3 ps-0 mb-0">
          {listAptitudes.map((aptitude: IAptitude, index: number) => {
            return <Aptitude {...aptitude} key={`aptitude-${index}`} />;
          })}
        </div>
      </section>
    </>
  );
};
