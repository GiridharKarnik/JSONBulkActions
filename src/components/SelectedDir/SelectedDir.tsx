import React from "react";
import { FolderIcon } from "../Icons";

import "./SelectedDir.css";

interface SelectedDirProps {
    directoryPath: string;
}

export const SelectedDir: React.FC<SelectedDirProps> = ({directoryPath}) => {
  return (
    <div className="selected-dir-container">
      <FolderIcon width="20px" height="20px" marginRight="10px"/>
      <p className="selected-dir-path">
        {directoryPath ? directoryPath : "Choose a directory"}
      </p>
    </div>
  );
};
