import React, { useEffect } from 'react';
import { useGlobalState, GlobalStateActionTypes } from '../../context/GlobalContext';
import { FolderTree } from './components/FolderTree/FolderTree';
import './FileTree.css';

export const FileTree: React.FC = () => {
  const [{ directoryPath, directoryContents }, dispatch] = useGlobalState();

  useEffect(() => {
    (async () => {
      if (directoryPath && directoryPath.trim() !== '') {
        const directoryContents = await (window as any).electronAPI.readDirectory(directoryPath);

        if (directoryContents) {
          dispatch({
            type: GlobalStateActionTypes.SetDirectoryContents,
            payload: {
              directoryContents,
            },
          });
        }
      }
    })();
  }, [directoryPath]);

  const onFileSelect = (fileName: string, filePath: string): void => {
    dispatch({
      type: GlobalStateActionTypes.SetSelectedJsonFilePath,
      payload: {
        selectedJsonFile: `${filePath}/${fileName}`,
      },
    });
  };

  return (
    <div className="file-tree-container">
      <p className="files-found-header">Localisation files</p>

      {directoryPath && (
        <FolderTree
          directoryContents={directoryContents || {}}
          nestedLevel={0}
          directoryPath={directoryPath}
          onFileSelect={onFileSelect}
        />
      )}
    </div>
  );
};
