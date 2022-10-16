import React from "react";

import { IconProps } from "./index";

export const ArrowIcon: React.FC<IconProps> = (props) => {
  const { size, ...styles } = props;

  return (
    <svg viewBox="0 0 497 497" width={size} height={size} style={styles}>
      <path
        d="m467 82.5h-30v90h60v-60c0-16.57-13.43-30-30-30z"
        fill="#ffa436"
      />
      <path
        d="m467 112.5-90 120h-377v-180c0-16.57 13.43-30 30-30h146.07c7.96 0 15.59 3.16 21.22 8.79l51.21 51.21h188.5c16.57 0 30 13.43 30 30z"
        fill="#ffbc2b"
      />
      <path d="m437 112.5-60 75h90v-75z" fill="#8ae7ff" />
      <path d="m437 112.5v150l-407-120v-30z" fill="#bdf2ff" />
      <path d="m30 142.5h290.93v90h-290.93z" fill="#fff" />
      <path
        d="m467 142.5-30 30v302h30c16.57 0 30-13.43 30-30v-272c0-16.57-13.43-30-30-30z"
        fill="#ffbc2b"
      />
      <path
        d="m467 142.5v302c0 16.57-13.43 30-30 30h-407c-16.57 0-30-13.43-30-30v-212c0-16.57 13.43-30 30-30h218.5l51.21-51.21c5.63-5.63 13.26-8.79 21.22-8.79z"
        fill="#ffcf66"
      />
    </svg>
  );
};
