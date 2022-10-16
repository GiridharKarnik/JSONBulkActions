import { CSSProperties } from "react";

type IconCSSProps = Pick<CSSProperties, 'transform' | 'transition' | 'marginRight'>;

export interface IconProps extends IconCSSProps {
  color?: string;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  margin?: string;
  marginRight?: string;
}

export { DragIcon } from './DragIcon';
export { FolderIcon } from './FolderIcon';
export { JsonFileIcon } from './JsonFileIcon';
export { OpenFolderIcon } from './OpenFolderIcon';