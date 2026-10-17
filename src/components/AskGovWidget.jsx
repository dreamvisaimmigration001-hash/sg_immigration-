import React from "react";
import "./AskGovWidget.css";

// Dual Overlapping Speech Bubbles Logo
const HelpBubblesIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="askgov-bubbles-icon"
    aria-hidden="true"
  >
    {/* Black Back Speech Bubble */}
    <path
      d="M13.8 5C8.8 5 4.8 8.6 4.8 13C4.8 14.9 5.5 16.6 6.7 18L5.2 21.8L9.2 20.6C10.6 21.2 12.1 21.5 13.8 21.5C18.8 21.5 22.8 17.9 22.8 13.5C22.8 9.1 18.8 5 13.8 5Z"
      fill="#000000"
    />
    {/* Blue Front Speech Bubble */}
    <g>
      <path
        d="M19.2 10.2C14.7 10.2 11 13.6 11 17.8C11 19.5 11.7 21.1 12.8 22.3L11.5 25.8L15.2 24.7C16.4 25.2 17.8 25.4 19.2 25.4C23.7 25.4 27.4 22 27.4 17.8C27.4 13.6 23.7 10.2 19.2 10.2Z"
        fill="#0056c6"
      />
      <text
        x="19.2"
        y="21.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontSize="11.5"
        fontWeight="bold"
      >
        ?
      </text>
    </g>
  </svg>
);

// Animated Waving Hand Matching Official Screenshot
export const WavingHandGraphic = () => (
  <span className="askgov-waving-hand-wrap" aria-label="Waving hand">
    <svg
      width="40"
      height="40"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="askgov-waving-hand-svg"
    >
      {/* 3 Wave Motion Arcs on Upper Right */}
      <path
        d="M 39 12 C 42.5 15.5, 42.5 20.5, 39 24"
        stroke="#111827"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 43.5 8.5 C 48 13, 48 23, 43.5 27.5"
        stroke="#111827"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 48 5 C 53.5 10.5, 53.5 25.5, 48 31"
        stroke="#111827"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Hand with Outline, Skin Fill, and Finger Details */}
      <g className="askgov-hand-palm-anim">
        {/* Full Hand & 5 Fingers Outline */}
        <path
          d="M 19 43 C 15 43, 11 36, 9.5 32 C 8 28, 5 24, 6 21 C 7 18, 10.5 19, 13 23 L 14.5 25.5 V 10 C 14.5 7.8, 17 6, 19 7 C 20.8 7.8, 20.8 9.5, 20.8 11.5 V 19 H 21.3 C 21.3 17, 21.8 6.5, 24.5 6 C 26.8 5.5, 27.8 7.5, 27.8 9.5 V 19.5 H 28.3 C 28.3 17.5, 29 9.5, 31.5 9 C 33.8 8.5, 34.8 10.5, 34.8 12.5 V 21 H 35.2 C 35.5 19.5, 36.5 14.5, 39 14 C 41 13.5, 42 15.5, 41.5 17.5 C 41 20, 39.5 24, 39 27 C 38 33, 35 41, 28 42.5 Z"
          fill="#ffdcb8"
          stroke="#111827"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Finger separation groove lines */}
        <path
          d="M 21 17 V 23.5"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 28 17 V 24"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 35 19 V 25"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Palm Crease / Character Lines */}
        <path
          d="M 15 27 C 19 30, 24 30.5, 28 27.5"
          stroke="#111827"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M 18 31 C 21.5 33.5, 26 33.5, 29.5 31"
          stroke="#111827"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </span>
);

export default function AskGovWidget() {
  return null;
}
