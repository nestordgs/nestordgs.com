import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../utils/SectionTitle/SectionTitle";

export const Interests = () => {
  const { t } = useTranslation();
  return (
    <section className="container pb-5 pt-4 px-xxl-0">
      <SectionTitle text={t("interests.title")} />
      <p data-testid="interests-description">{t("interests.description")}</p>
    </section>
  );
};
