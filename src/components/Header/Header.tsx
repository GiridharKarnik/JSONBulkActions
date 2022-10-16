import React from "react";
import "./Header.css";

import { Button } from "../Button/Button";
import { OpenFolderIcon } from "../Icons";
import {
  GlobalStateActionTypes,
  useGlobalState,
} from "../../context/GlobalContext";

export const Header: React.FC = () => {
  const [, dispatch] = useGlobalState();

  const chooseDirectory = async () => {
    const filePath = await (window as any).electronAPI.chooseDirectory();

    if (filePath) {
      dispatch({
        type: GlobalStateActionTypes.SetDirectoryPath,
        payload: {
          directoryPath: filePath,
        },
      });
    }
  };

  return (
    <div className="header-container">
      <h1 className="app-header">Lokalise helper</h1>

      <Button
        icon={<OpenFolderIcon width="20px" height="20px" />}
        text="Choose directory"
        onClick={chooseDirectory}
      />
    </div>
  );
};
