import React from 'react';
import { DragIcon } from '../../../Icons';

import './JsonLine.css';

interface JsonLineProps {
  bracketOpen?: boolean;
  bracketKey?: string;
  keyValue?: {
    key: string;
    value: string;
  };
  bracketClose?: boolean;
  nestedLevel?: number;
}

export const JsonLine: React.FC<JsonLineProps> = ({ bracketOpen, bracketKey, keyValue, bracketClose, nestedLevel }) => {
  return (
    <div className="json-line-container">
      <DragIcon size="15px" color={'#767676'} marginRight="15px" />
      {bracketOpen && (
        <div className="object-key-open-bracket" style={{ paddingLeft: nestedLevel ? nestedLevel * 20 : 0 }}>
          {bracketKey && <span className="object-key">{`${bracketKey}: `}</span>}
          <span className="bracket-open">{'{'}</span>
        </div>
      )}

      {keyValue && (
        <div className="key-value">
          <span className="json-key">{`${keyValue.key}: `}</span>
          <span className="json-value">{`${
            typeof keyValue.value === 'string' ? `"${keyValue.value}"` : keyValue.value
          },`}</span>
        </div>
      )}

      {bracketClose && (
        <span className="bracket-close" style={{ paddingLeft: nestedLevel ? nestedLevel * 20 : 0 }}>
          {'}'}
        </span>
      )}
    </div>
  );
};
