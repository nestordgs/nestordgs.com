import React from "react";
import { IExperienceTitleProps } from "./interfaces";

export const ExperienceTitle: React.FC<IExperienceTitleProps> = ({
  title,
  numberOfWhiteSpaces,
}) => {
  const renderTitleByNumberOfWhiteSpaces = (
    numberOfWhiteSpaces: number,
    title: string
  ) => {
    const splitTitle: string[] = title.split(" ");
    if (numberOfWhiteSpaces === 2) {
      return (
        <text className="experience-title" transform="translate(44.57 188.83)">
          <tspan x="0" y="0">
            {splitTitle[0]}
          </tspan>
          <tspan x="0" y="80.75">
            {splitTitle[1]}.
          </tspan>
        </text>
      );
    } else {
      return (
        <text className="experience-title" transform="translate(20.6 148.42)">
          <tspan x="0" y="0">
            {splitTitle[0]}
          </tspan>
          <tspan x="0" y="80.75">
            {splitTitle[1]}
          </tspan>
          <tspan x="0" y="161.49">
            {splitTitle[2]}.
          </tspan>
        </text>
      );
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 445 419"
    >
      <defs>
        <linearGradient
          id="Degradado_sin_nombre_4"
          data-name="Degradado sin nombre 4"
          x1="370.2"
          y1="342.07"
          x2="439.73"
          y2="411.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="stop-one" offset="0" />
          {/* <stop className="stop-one" offset="0" stopColor="#6cf" /> */}
          <stop className="stop-two" offset="1" />
          {/* <stop className="stop-two" offset="1" stopColor="#63ff9f" /> */}
        </linearGradient>
        <linearGradient
          id="Degradado_sin_nombre_4-2"
          data-name="Degradado sin nombre 4"
          x1="325.7"
          y1="325.38"
          x2="395.23"
          y2="394.91"
          xlinkHref="#Degradado_sin_nombre_4"
        />
        <linearGradient
          id="Degradado_sin_nombre_4-3"
          data-name="Degradado sin nombre 4"
          x1="70.68"
          y1="70.09"
          x2="1.15"
          y2=".56"
          xlinkHref="#Degradado_sin_nombre_4"
        />
        <linearGradient
          id="Degradado_sin_nombre_4-4"
          data-name="Degradado sin nombre 4"
          x1="115.18"
          y1="86.77"
          x2="45.65"
          y2="17.24"
          xlinkHref="#Degradado_sin_nombre_4"
        />
      </defs>
      <g className="experience-cls-9">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Capa_1" data-name="Capa 1">
            <g>
              <rect className="experience-cls-1" width="445" height="419" />
              {renderTitleByNumberOfWhiteSpaces(numberOfWhiteSpaces, title)}
              <g>
                <g>
                  <g className="experience-cls-7">
                    <rect
                      className="experience-cls-5"
                      x="27.93"
                      y="357.85"
                      width="37.22"
                      height="37.22"
                      transform="translate(279.83 77.36) rotate(45)"
                    />
                    <rect
                      className="experience-cls-5"
                      x="104.54"
                      y="355.54"
                      width="20.47"
                      height="20.47"
                      transform="translate(292.26 25.98) rotate(45)"
                    />
                    <rect
                      className="experience-cls-5"
                      x="73.83"
                      y="310.06"
                      width="13.71"
                      height="13.71"
                      transform="translate(247.73 35.77) rotate(45)"
                    />
                  </g>
                  <g className="experience-cls-7">
                    <rect
                      className="experience-cls-5"
                      x="379.78"
                      y="22.9"
                      width="37.22"
                      height="37.22"
                      transform="translate(650.74 352.57) rotate(-135)"
                    />
                    <rect
                      className="experience-cls-5"
                      x="319.92"
                      y="41.96"
                      width="20.47"
                      height="20.47"
                      transform="translate(526.7 322.56) rotate(-135)"
                    />
                    <rect
                      className="experience-cls-5"
                      x="357.39"
                      y="94.21"
                      width="13.71"
                      height="13.71"
                      transform="translate(550.34 430.08) rotate(-135)"
                    />
                  </g>
                </g>
                <g>
                  <path
                    className="experience-cls-8"
                    d="m370.2,342.07c6.07,5.52,12.05,11.13,17.93,16.83,5.91,5.68,11.73,11.45,17.54,17.23,5.78,5.81,11.55,11.63,17.23,17.54,5.7,5.89,11.31,11.87,16.83,17.93-6.07-5.52-12.05-11.13-17.93-16.83-5.91-5.68-11.73-11.45-17.54-17.23-5.78-5.81-11.54-11.63-17.23-17.54-5.7-5.89-11.31-11.86-16.83-17.93Z"
                  />
                  <path
                    className="experience-cls-2"
                    d="m325.7,325.38c6.07,5.52,12.05,11.13,17.93,16.83,5.91,5.68,11.73,11.45,17.54,17.23,5.78,5.81,11.55,11.63,17.23,17.54,5.7,5.89,11.31,11.87,16.83,17.93-6.07-5.52-12.05-11.13-17.93-16.83-5.91-5.68-11.73-11.45-17.54-17.23-5.78-5.81-11.54-11.63-17.23-17.54-5.7-5.89-11.31-11.86-16.83-17.93Z"
                  />
                </g>
                <g>
                  <path
                    className="experience-cls-3"
                    d="m70.68,70.09c-6.07-5.52-12.05-11.13-17.93-16.83-5.91-5.68-11.73-11.45-17.54-17.23-5.78-5.81-11.55-11.63-17.23-17.54C12.28,12.6,6.67,6.62,1.15.56c6.07,5.52,12.05,11.13,17.93,16.83,5.91,5.68,11.73,11.45,17.54,17.23,5.78,5.81,11.54,11.63,17.23,17.54,5.7,5.89,11.31,11.86,16.83,17.93Z"
                  />
                  <path
                    className="experience-cls-4"
                    d="m115.18,86.77c-6.07-5.52-12.05-11.13-17.93-16.83-5.91-5.68-11.73-11.45-17.54-17.23-5.78-5.81-11.55-11.63-17.23-17.54-5.7-5.89-11.31-11.87-16.83-17.93,6.07,5.52,12.05,11.13,17.93,16.83,5.91,5.68,11.73,11.45,17.54,17.23,5.78,5.81,11.54,11.63,17.23,17.54,5.7,5.89,11.31,11.86,16.83,17.93Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
