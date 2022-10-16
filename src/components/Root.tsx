import React, { useState, useEffect } from 'react';
import { FileTree } from './FileTree/FileTree';
import { Header } from './Header/Header';
import { SelectedDir } from './SelectedDir/SelectedDir';
import { JsonViewer } from './JsonViewer/JsonViewer';
import { useGlobalState } from '../context/GlobalContext';

import './Root.css';

export const Root = () => {
  const [{ directoryPath, selectedJsonFile }, setDirectoryPath] = useGlobalState();
  const [jsonFileContents, setJsonFileContents] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      if (selectedJsonFile && selectedJsonFile.trim() !== '') {
        const jsonFileContents = await (window as any).electronAPI.readJsonFile(selectedJsonFile);

        if (jsonFileContents) {
          console.log(jsonFileContents)

          setJsonFileContents(jsonFileContents);
        }
      }
    })();
  }, [selectedJsonFile]);

  return (
    <div className="root">
      <Header />

      {directoryPath && <SelectedDir directoryPath={directoryPath} />}

      <div className="directory-tree-and-json-viewer-container">
        <FileTree />
        <JsonViewer jsonFileContents={jsonFileContents} fileNameWithPath={selectedJsonFile} />
      </div>
    </div>
  );
};
