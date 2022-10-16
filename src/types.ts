export interface FileType {
    name: string;
    type: string;
}

export interface DirectoryContents {
  [fileOrDirectoryName: string]: FileType | DirectoryContents;
}

export interface JSONObject {
  [key: string]: JSONObject | string | number | boolean | null;
}