import path from 'path';

import { readDirectoryContentsSync } from './readDirectoryContentsSync';

import { DirectoryContents, JSONObject } from '../types';

const isAJsonObject = (json: any): json is JSONObject => {
  if (typeof json === 'object' && !Array.isArray(json)) {
    return true;
  }

  return false;
};

export const findAllFilesWithName = (fileName: string, rootDirectoryPath: string): Array<string> => {
  let filePaths: Array<string> = [];

  const directoryContents: DirectoryContents = readDirectoryContentsSync(rootDirectoryPath);

  Object.keys(directoryContents).forEach(fileOrDirName => {
    if (directoryContents[fileOrDirName].type === '.json') {
      if (fileOrDirName === fileName) {
        filePaths.push(path.join(rootDirectoryPath, fileOrDirName));
      }
    } else {
      filePaths = [...filePaths, ...findAllFilesWithName(fileName, path.join(rootDirectoryPath, fileOrDirName))];
    }
  });

  return filePaths;
};
