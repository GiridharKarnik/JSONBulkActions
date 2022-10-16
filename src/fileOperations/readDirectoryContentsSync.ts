import fs from 'fs-extra';
import path from 'path';

import { DirectoryContents } from '../types';

export const readDirectoryContentsSync = (directoryPath: string): DirectoryContents => {
    const directoryContents: DirectoryContents = {};
  
    const filesOrDirectories = fs.readdirSync(directoryPath);
  
    for (const fileOrDir of filesOrDirectories) {
      const dirFile = path.join(directoryPath, fileOrDir);
      const dirent = fs.statSync(dirFile);
  
      if (dirent.isDirectory()) {
        directoryContents[fileOrDir] = readDirectoryContentsSync(dirFile);
      } else {
        directoryContents[fileOrDir] = {
          name: fileOrDir,
          type: path.extname(fileOrDir),
        };
      }
    }
  
    return directoryContents;
  };