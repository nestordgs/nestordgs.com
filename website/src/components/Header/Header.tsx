import i18n from "i18next";
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect } from "react";

import sections from "./sections.json";
import { TranslationConext } from "../../translations";

export const Header = () => {
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
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-testid="header-page"
    >
      <div className="container">
        <a className="navbar-brand" href="/" data-testid="logo">
          Nestor Gutierrez
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            data-testid="menu-component"
            className="navbar-nav me-auto mb-2 mb-lg-0"
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
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={handleLanguage}
              checked={language === "en" ? true : false}
            />
            <label className="form-check-label">{t("language")}</label>
          </div>
        </div>
      </div>
    </nav>
  );
};
