import React from "react";
import dayjs from "dayjs";
import { IStudy } from "./interfaces/IStudies";
import { useTranslation } from "react-i18next";

export const Study: React.FC<IStudy> = ({
  title,
  institute,
  dateFrom,
  dateTo,
  credentialId,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <article className="card studie-item pt-3">
      {image && (
        <img
          src={image}
          alt={title}
          data-testid="study-image"
          className="mx-auto img-fluid card-img-top rounded-start study-img"
        />
      )}
      <div className="card-body">
        <h2 className="fs-4">{title}</h2>
        <p>{institute}</p>
        <p className="text-capitalize" data-testid="study-dates">
          <span>{dayjs(dateFrom).format("MMM YYYY")}</span>
          {dateTo && (
            <span data-testid="study-dates-to">
              {` - ${dayjs(dateTo).format("MMM YYYY")}`}
            </span>
          )}
        </p>
        {credentialId && (
          <p data-testid="study-credential">
            {t("studies.credential")} {credentialId}
          </p>
        )}
      </div>
    </article>
  );
};
