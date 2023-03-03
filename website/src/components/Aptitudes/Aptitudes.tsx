import React from "react";
import { Aptitude } from "./Aptitude";
import { IAptitude } from "./interfaces";

export const Aptitudes: React.FC = () => {
  const listAptitudes: IAptitude[] = [
    {
      title: "Amazon Web Services (AWS)",
      imageUrl: "../../../assets/aptitudes/aws.png",
    },
    {
      title: "Docker",
      imageUrl: "../../../assets/aptitudes/docker.png",
    },
    {
      title: "Python",
      imageUrl: "../../../assets/aptitudes/python.png",
    },
    {
      title: "NodeJs",
      imageUrl: "../../../assets/aptitudes/nodejs.png",
      colorClass: "difference",
    },
    {
      title: "ReactJs",
      imageUrl: "../../../assets/aptitudes/react.png",
    },
    {
      title: "Typescript",
      imageUrl: "../../../assets/aptitudes/typescript.png",
    },
    {
      title: "Unit Tests",
      imageUrl: "../../../assets/aptitudes/unit-testing.png",
    },
    {
      title: "Kubernetes",
      imageUrl: "../../../assets/aptitudes/k8.png",
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
      title: "VueJs",
      imageUrl: "../../../assets/aptitudes/vue.png",
    },
    {
      title: "Sass",
      imageUrl: "../../../assets/aptitudes/sass.png",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <h2 className="aptitudes-title pb-2 d-inline-block mb-5">
          Aptitudes .<span className="aptitudes-title-line bg-menu-color-bar" />
        </h2>
        <div className="d-grid gap-3 aptitudes-grid">
          {listAptitudes.map((aptitude: IAptitude, index: number) => {
            return <Aptitude {...aptitude} key={`aptitude-${index}`} />;
          })}
        </div>
      </div>
    </>
  );
};
