import React from "react";
import { ISectionTitle } from "../interfaces";

export const SectionTitle: React.FC<ISectionTitle> = ({ text }) => {
  return (
    <h2
      className="section-title pb-2 d-inline-block mb-5"
      data-testid="section-title"
    >
      {text}.
      <span
        className="section-title-line bg-menu-color-bar"
        data-testid="section-title-line"
      />
    </h2>
  );
};
