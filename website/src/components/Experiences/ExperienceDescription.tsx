import React from "react";
import { IExperienceDescription } from "./interfaces/intex";

export const ExperienceDescription: React.FC<IExperienceDescription> = ({
  company,
  description,
}) => {
  return (
    <div className="col-md-8 d-flex align-items-center bg-grid">
      <div className="card-body">
        <h2 className="card-title fs-1 text-white" data-testid="company-name">
          {company}
        </h2>
        <p
          className="card-text text-white text-keep-white-space"
          data-testid="company-description"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
