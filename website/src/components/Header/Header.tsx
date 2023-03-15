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
    <section className="d-flex align-items-center justify-content-between container-header">
      <div className="header-background">
        <Grid
          colors={backgroundColors}
          gridColor={gridHeaderColor}
          className="d-none d-md-block"
          data-testid="canvas-grid-bg"
        />
      </div>
      <div className="container header-description">
        <figure className="row row-description mb-0">
          <div className="d-none d-md-block col-sm-4 col-xl-3 text-center bg-letter-n">
            <LetterN />
          </div>
          <div className="col-12 col-sm-7 col-md-8 col-xl-9 container col-description d-flex flex-column align-items-left align-self-center">
            <h1 className="text-white">{t("aptitudes.im")}</h1>
            <p className="fs-5 text-white">{t("aptitudes.description")}</p>
          </div>
        </figure>
      </div>
    </section>
  );
};
