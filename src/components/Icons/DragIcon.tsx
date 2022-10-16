import React from 'react';

import { IconProps } from './index';

export const DragIcon: React.FC<IconProps> = props => {
  const { color, size, ...styles } = props;

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={styles}>
      <g fill={color}>
        <circle cx="8" cy="4" r="2" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="8" cy="20" r="2" />
        <circle cx="16" cy="4" r="2" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="16" cy="20" r="2" />
      </g>
    </svg>
  );
};
