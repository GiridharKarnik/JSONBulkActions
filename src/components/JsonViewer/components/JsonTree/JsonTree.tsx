import React from 'react';
import { JsonLine } from '../JsonLine/JsonLine';

import {JSONObject} from '../../../../types';

import './JsonTree.css';

const isAJsonObject = (json: any): json is JSONObject => {
  if (typeof json === 'object' && !Array.isArray(json)) {
    return true;
  }

  return false;
};

interface JsonTreeProps {
  jsonObject: JSONObject;
  nestedLevel: number;
  objectKey?: string;
}

export const JsonTree: React.FC<JsonTreeProps> = ({ jsonObject, nestedLevel, objectKey }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div style={{width: '100%'}}>
      <JsonLine nestedLevel={nestedLevel} bracketKey={objectKey} bracketOpen />
      <div style={{ paddingLeft: nestedLevel * 20 }}>
        {Object.keys(jsonObject).map((key: string, index: number) => {
          if (isAJsonObject(jsonObject[key])) {
            return (
              <JsonTree
                jsonObject={jsonObject[key] as JSONObject}
                nestedLevel={nestedLevel + 1}
                objectKey={key}
                key={key}
              />
            );
          } else {
            return <JsonLine keyValue={{ key, value: jsonObject[key] as string }} key={`${key}-${jsonObject[key]}`} />;
          }
        })}
      </div>
      <JsonLine nestedLevel={nestedLevel} bracketClose />
    </div>
  );
};
