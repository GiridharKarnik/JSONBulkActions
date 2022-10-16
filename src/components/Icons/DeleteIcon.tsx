import React from 'react';

import { IconProps } from './index';

export const DeleteIcon: React.FC<IconProps> = props => {
  const { color, size, ...styles } = props;

  return (
    <svg viewBox="0 0 512 512" width={size} height={size} style={styles}>
      <g fill={color}>
        <path
          d="M62.205,150l26.569,320.735C90.678,493.865,110.38,512,133.598,512h244.805c23.218,0,42.92-18.135,44.824-41.265
			L449.795,150H62.205z M180.986,452c-7.852,0-14.458-6.108-14.956-14.063l-15-242c-0.513-8.276,5.771-15.395,14.033-15.908
			c8.569-0.601,15.381,5.757,15.908,14.033l15,242C196.502,444.632,189.721,452,180.986,452z M271,437c0,8.291-6.709,15-15,15
			c-8.291,0-15-6.709-15-15V195c0-8.291,6.709-15,15-15s15,6.709,15,15V437z M360.97,195.938l-15,242
			c-0.493,7.874-7.056,14.436-15.908,14.033c-8.262-0.513-14.546-7.632-14.033-15.908l15-242
			c0.513-8.276,7.764-14.297,15.908-14.033C355.199,180.543,361.483,187.662,360.97,195.938z"
        />

        <path
          d="M451,60h-90V45c0-24.814-20.186-45-45-45H196c-24.814,0-45,20.186-45,45v15H61c-16.569,0-30,13.431-30,30
			c0,16.567,13.431,30,30,30c137.966,0,252.039,0,390,0c16.569,0,30-13.433,30-30C481,73.431,467.569,60,451,60z M331,60H181V45
			c0-8.276,6.724-15,15-15h120c8.276,0,15,6.724,15,15V60z"
        />
      </g>
    </svg>
  );
};