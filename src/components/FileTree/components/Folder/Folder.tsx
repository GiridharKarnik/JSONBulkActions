import React from 'react';
import { FolderIcon } from '../../../Icons';

import './Folder.css';

interface FolderProps {
  name: string;
  nestedLevel: number;
}

export const Folder: React.FC<FolderProps> = ({ name, nestedLevel }) => {
  return (
    <div className="folder-container" style={{ paddingLeft: nestedLevel * 10 }}>
      <FolderIcon size="15px" marginRight="10px" />
      <p className="folder-name">{name}</p>
    </div>
  );
};
