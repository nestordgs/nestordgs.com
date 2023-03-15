import React from "react";
import { IAptitude } from "./interfaces";

export const Aptitude: React.FC<IAptitude> = ({
  title,
  imageUrl,
  colorClass,
}) => {
  return (
    <article className="p-4l aptitude d-flex w-100">
      <div className="col-5 aptitude-bg text-center d-flex align-items-center justify-content-center">
        <img
          src={imageUrl}
          className={`card-img-top img-fluid rounded-start aptitude-img ${
            colorClass ? colorClass : ""
          }`}
          alt={title}
        />
      </div>
      <div className="col d-flex align-items-center p-3 justify-content-center">
        <h3 className="text-center text-white fs-5">{title}</h3>
      </div>
    </article>
  );
};
