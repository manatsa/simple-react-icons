import * as React from "react";

const SvgApps = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 52 52"
    xmlSpace="preserve"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 4H7C5.3 4 4 5.3 4 7v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM13 36H7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM13 20H7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM29 4h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM29 36h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM29 20h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM45 4h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM45 36h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM45 20h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z" />
  </svg>
);

export default SvgApps;
