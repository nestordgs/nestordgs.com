import React from "react";

interface IAptitude {
  title: string;
  imageUrl: string;
  colorClass?: string;
}

export const Aptitudes = () => {
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
        <h1 className="aptitudes-title pb-2">
          Aptitudes .<span className="aptitudes-title-line bg-menu-color-bar" />
        </h1>
        <div className="d-grid gap-3 aptitudes-grid">
          {listAptitudes.map((aptitude: IAptitude, index: number) => {
            return (
              <div
                className="p-4l aptitude d-flex w-100"
                key={`aptitude-${index}`}
              >
                <div className="col-5 aptitude-bg text-center d-flex align-items-center justify-content-center">
                  <img
                    src={aptitude.imageUrl}
                    className={`card-img-top img-fluid rounded-start aptitude-img ${
                      aptitude.colorClass ? aptitude.colorClass : ""
                    }`}
                  />
                </div>
                <div className="col d-flex align-items-center p-3 justify-content-center">
                  <p className="text-center text-white fs-4">
                    {aptitude.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
