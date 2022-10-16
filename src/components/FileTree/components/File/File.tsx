import React from 'react';
import { JsonFileIcon } from './../../../Icons';

import './File.css';

interface FileProps {
  name: string;
  directoryPath: string;
  onFileSelect: (fileName: string, directoryPath: string) => void;
}

export const File: React.FC<FileProps> = ({ name, directoryPath, onFileSelect }) => {
  return (
    <div
      className="file-row-container"
      onClick={() => {
        onFileSelect(name, directoryPath);
      }}
    >
      <JsonFileIcon size="17px" marginRight="10px" color="#F6C358" />
      <p className="file-name">{name}</p>
    </div>
  );
};
