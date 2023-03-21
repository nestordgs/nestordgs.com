import React from "react";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Footer = () => {
  return (
    <footer
      className="container pb-5 px-xxl-0 text-center text-body-tertiary"
      id="contact"
    >
      <div
        className="btn-group no-hover"
        role="group"
        aria-label="Basic example"
      >
        <a
          className="btn btn-link"
          href="https://www.linkedin.com/in/nestordgs/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={brands("linkedin")} />
        </a>
        <a
          className="btn btn-link"
          href="https://gitlab.com/nestordgs"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={brands("gitlab")} />
        </a>
        <a
          className="btn btn-link"
          href="https://github.com/nestordgs"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={brands("github")} />
        </a>
        <a
          className="btn btn-link"
          href="https://dev.to/nestordgs"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={brands("dev")} />
        </a>
      </div>
      <p
        className="mb-0"
        style={{
          fontSize: 10,
        }}
      >
        {`Developed with `}
        <span className="footer-heart">
          <FontAwesomeIcon icon={solid("heart")} />
        </span>
        {` by NESTOR GUTIERREZ ${dayjs().year()}`}
      </p>
    </footer>
  );
};
