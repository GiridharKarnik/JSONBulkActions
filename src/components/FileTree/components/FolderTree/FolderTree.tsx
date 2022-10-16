import React from 'react';
import { DirectoryContents, FileType } from '../../../../types';
import { Folder } from '../Folder/Folder';
import { File } from '../File/File';
import './FolderTree.css';

const isDirectory = (directoryOrFile: DirectoryContents | FileType): boolean => {
  if (Object.keys(directoryOrFile).includes('name')) {
    return false;
  }

  return true;
};

interface FolderTreeProps {
  directoryContents: DirectoryContents;
  nestedLevel: number;
  directoryPath: string;
  onFileSelect: (fileName: string, directoryPath: string) => void;
}

export const FolderTree: React.FC<FolderTreeProps> = ({ directoryContents, nestedLevel, directoryPath, onFileSelect }) => {
  return (
    <div className='folder-tree-container' style={{paddingLeft:  nestedLevel * 16}}>
      {Object.keys(directoryContents).map((directoryOrFileName: string) => {
        const directoryOrFile = directoryContents[directoryOrFileName];

        if (isDirectory(directoryOrFile)) {
          return (
            <React.Fragment key={directoryOrFileName}>
              <Folder name={directoryOrFileName} nestedLevel={nestedLevel} />
              <FolderTree
                directoryContents={directoryOrFile as DirectoryContents}
                nestedLevel={nestedLevel + 1}
                directoryPath={`${directoryPath}/${directoryOrFileName}`}
                onFileSelect={onFileSelect}
              />
            </React.Fragment>
          );
        } else {
          return <File name={directoryOrFileName} directoryPath={directoryPath} onFileSelect={onFileSelect} key={`${directoryPath}/${directoryOrFileName}`}/>;
        }
      })}
    </div>
  );
};
