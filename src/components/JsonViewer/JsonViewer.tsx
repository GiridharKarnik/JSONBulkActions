import { JsonFileIcon } from '../Icons';
import React from 'react';
import { JsonTree } from './components/JsonTree/JsonTree';

import './JsonViewer.css';

interface JsonViewerProps {
  jsonFileContents?: any;
  fileNameWithPath?: string;
}

const mockJson = {
  common: {
    na: 'N/A',
    debut: 'Дебют',
    vs: 'Vs',
    win: 'Победа',
    tie: 'Жребий',
    round: 'RND {{number}}',
    rank: 'Ранг {{number}}',
    champion: 'C',
    noContest: 'Не се Играе',
    roundLong: 'Pунд {{number}}',
  },
  fightCardNavigation: {
    mainCard: 'Основна карта',
    prelims: 'Предварителни',
    earlyPrelims: 'Ранни предв.',
  },
};

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
