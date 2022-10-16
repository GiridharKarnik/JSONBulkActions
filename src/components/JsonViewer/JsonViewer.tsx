import { JsonFileIcon } from '../Icons';
import React from 'react';
import { JsonTree } from './components/JsonTree/JsonTree';

import './JsonViewer.css';

interface JsonViewerProps {
  jsonFileContents?: any;
  fileNameWithPath?: string;
}

export const JsonViewer: React.FC<JsonViewerProps> = ({ jsonFileContents, fileNameWithPath }) => {
  if (!jsonFileContents || !fileNameWithPath) {
    return <div className="json-viewer-container"></div>;
  }

  return (
    <div className="json-viewer-container">
      <div className="json-file-info">
        <JsonFileIcon size="17px" marginRight="10px" color="#F6C358" />
        <p className="json-file-name-with-path">{fileNameWithPath}</p>
      </div>
      <JsonTree jsonObject={jsonFileContents} nestedLevel={0} />
    </div>
  );
};
