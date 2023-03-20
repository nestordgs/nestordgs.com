import i18n from "i18next";
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect } from "react";

import sections from "./sections.json";
import { TranslationConext } from "../../translations";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";

export const Menu = () => {
  const { language, changeLanguage } = useContext(TranslationConext);
  const { t } = useTranslation();

  const handleLanguage = (e: any) => {
    if (e.target.checked) {
      changeLanguage("en");
    } else {
      changeLanguage("es");
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <header
      className="navbar navbar-expand-lg py-4 sticky-top bg-dark-nestordgs"
      data-testid="header-page"
    >
      <div className="container px-xxl-0">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/" data-testid="logo">
          <img
            src="../assets/logo.png"
            alt="Nestor Gutierrez"
            className="img-fluid size-logo-menu"
          />
        </a>
        <div className="form-check form-switch">
          <SwitchLanguage
            label={`${language.toUpperCase()}`}
            isChecked={language === "en" ? true : false}
            onClick={handleLanguage}
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            data-testid="menu-component"
            className="navbar-nav ms-auto me-4 mb-2 mb-lg-0"
          >
            {sections.map((section) => {
              return (
                <li className="nav-item" key={`section-${section.name}`}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={section.value}
                  >
                    {t(`${section.name}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <span className="menu-color-bar bg-menu-color-bar" />
    </header>
  );
};
