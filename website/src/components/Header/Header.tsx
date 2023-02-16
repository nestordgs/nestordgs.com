import React from "react";
import Grid from "animated-grid-lines";
import {
  gradientFive,
  gradientFour,
  gradientOne,
  gradientThree,
  gradientTwo,
  gridHeaderColor,
} from "../../constants";
import { LetterN } from "../utils/LetterN";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const backgroundColors: string[] = [
    gradientOne,
    gradientTwo,
    gradientThree,
    gradientFour,
    gradientFive,
  ];

  return (
    <div className="d-flex align-items-center justify-content-between container-header">
      <div className="header-background">
        <Grid colors={backgroundColors} gridColor={gridHeaderColor} />
      </div>
      <div className="container header-description">
        <div className="row">
          <div className="col-12 col-sm-3 text-center bg-letter-n">
            <LetterN />
          </div>
          <div
            className="col-12 col-sm-9 container col-description"
            // style={{ padding: 100 }}
          >
            <p className="fs-1 text-white">{t("aptitudes.im")}</p>
            <p className="fs-4 text-white">{t("aptitudes.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
