import * as React from "react";

const SvgChevron = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        fill: "#0089ff",
      }}
      d="M505.183 123.179c-9.087-9.087-23.824-9.089-32.912.002l-216.266 216.27L39.729 123.179c-9.087-9.087-23.824-9.089-32.912.002-9.089 9.089-9.089 23.824 0 32.912L239.55 388.82a23.271 23.271 0 0 0 32.91-.001l232.721-232.727c9.091-9.088 9.091-23.824.002-32.913z"
    />
  </svg>
);

export default SvgChevron;
