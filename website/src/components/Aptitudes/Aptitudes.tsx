import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";
import { SectionTitle } from "../utils/SectionTitle/SectionTitle";
import { Aptitude } from "./Aptitude";
import { IAptitude } from "./interfaces";

export const Aptitudes: React.FC = () => {
  const { t } = useTranslation();
  const largeScreen = useMediaQuery("(min-width: 992px)");
  const mediumScreen = useMediaQuery("(min-width: 576px)");

  const listAptitudes: IAptitude[] = [
    {
      title: "Amazon Web Services (AWS)",
      imageUrl: "../../../assets/aptitudes/aws.png",
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

  const [showMore, setShowMore] = useState<boolean>(false);
  const [toSlice, setToSlice] = useState<number>(listAptitudes.length - 1);

  useEffect(() => {
    if (largeScreen && mediumScreen) {
      setToSlice(listAptitudes.length - 1);
    }

    if ((largeScreen && !mediumScreen) || (!largeScreen && mediumScreen)) {
      setToSlice(6);
    }

    if (!largeScreen && !mediumScreen) {
      setToSlice(4);
    }

    console.log(
      largeScreen,
      mediumScreen,
      listAptitudes.slice(0, toSlice).length
    );
  }, [largeScreen, mediumScreen]);

  const handleShowMore = () => {
    setToSlice(listAptitudes.length - 1);
    setShowMore(true);
  };

  const handleShowLess = () => {
    if ((largeScreen && !mediumScreen) || (!largeScreen && mediumScreen)) {
      setToSlice(6);
    }

    if (!largeScreen && !mediumScreen) {
      setToSlice(4);
    }
    setShowMore(false);
  };

  return (
    <>
      <section className="container py-5 px-xxl-0">
        <SectionTitle text={t("aptitudes.title")} />
        <div className="aptitudes-grid d-grid gap-3 ps-0 mb-0">
          {listAptitudes
            .slice(0, toSlice)
            .map((aptitude: IAptitude, index: number) => {
              return <Aptitude {...aptitude} key={`aptitude-${index}`} />;
            })}
        </div>
        <div className="text-center pt-4 d-lg-none">
          {!showMore ? (
            <button
              type="button"
              className="btn border btn-outline-gradient-nestordgs-2"
              onClick={handleShowMore}
            >
              Show More
            </button>
          ) : (
            <button
              type="button"
              className="btn border btn-outline-gradient-nestordgs-4"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </div>
      </section>
    </>
  );
};
