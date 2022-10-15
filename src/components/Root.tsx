import React from "react";
import { FileTree } from "./FileTree/FileTree";
import { Header } from "./Header/Header";
import { SelectedDir } from "./SelectedDir/SelectedDir";
import "./Root.css";
import { useGlobalState } from "../context/GlobalContext";

export const Root = () => {
  const [{ directoryPath }, setDirectoryPath] = useGlobalState();

  return (
    <div className="root">
      <Header />

      {directoryPath && <SelectedDir directoryPath={directoryPath} />}

      <FileTree />
    </div>
  );
};
