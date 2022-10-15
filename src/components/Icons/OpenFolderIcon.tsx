import React from "react";

import { IconProps } from "./index";

export const OpenFolderIcon: React.FC<IconProps> = (props) => {
  const { color, size, ...styles } = props;

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...styles}>
      <path
        d="m59 59a3.9989 3.9989 0 0 0 4-4v-31a7.9978 7.9978 0 0 0 -8-8h-36v43z"
        fill="#ffb125"
      />
      <path
        d="m59 59h-54a3.9989 3.9989 0 0 1 -4-4v-38a3.9989 3.9989 0 0 1 4-4h11.94a6.0207 6.0207 0 0 1 4.86 2.47l.39.53 4.61 6.35a3.9941 3.9941 0 0 0 3.24 1.65h24.96v31a3.9946 3.9946 0 0 0 4 4z"
        fill="#fcd354"
      />
      <path
        d="m55 5c-13.57 0-22 6.8975-22 18v8h-5a1 1 0 0 0 -.707 1.707l10 10a.9995.9995 0 0 0 1.414 0l10-10a1 1 0 0 0 -.707-1.707h-5v-8c0-7.0527 5.65-16 12-16a1 1 0 0 0 0-2z"
        fill="#48acff"
      />
    </svg>
  );
};
