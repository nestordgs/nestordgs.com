import React from "react";
import { useTranslation } from "react-i18next";
import { IExperienceDescription } from "./interfaces/intex";

export const ExperienceDescription: React.FC<IExperienceDescription> = ({
  company,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-8 d-flex align-items-center bg-grid">
      <div className="card-body">
        <h2 className="card-title fs-1 text-white" data-testid="company-name">
          {company}
        </h2>
        <p
          className="card-text text-white text-keep-white-space fw-lighter"
          data-testid="company-description"
        >
          {t(description)}
        </p>
      </div>
    </div>
  );
};
