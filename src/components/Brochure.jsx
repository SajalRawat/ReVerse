import React from "react";

const ExploreButton = ({ onClick }) => {
  return (
    <>
      <button className="explore-button" onClick={onClick}>
        <svg
          className="svgIcon"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        <span className="mainfont text-[26px]">Brochure</span>
      </button>

      <style>
        {`
          .explore-button {
            display: inline-flex;
            align-items: center;
            gap: 0.6em;
            background-color: #fde047;
            border-radius: 999px;
            color: #111827;
            font-weight: 600;
            border: none;
            cursor: pointer;
            padding: 0.6em 1.4em;
            transition: all 0.4s ease;
            box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
          }

          .svgIcon {
            width: 1.2em;
            height: 1.2em;
            transition: transform 1.5s ease;
            fill: #111827;
          }

          .explore-button:hover {
            background-color: #facc15;
          }

          .explore-button:active {
            transform: scale(0.95);
          }

          .explore-button:hover .svgIcon {
            transform: rotate(250deg);
          }
        `}
      </style>
    </>
  );
};

export default ExploreButton;
