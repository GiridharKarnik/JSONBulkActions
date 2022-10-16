import React from 'react';
import { DeleteIcon, DragIcon } from '../../../Icons';

import './JsonLine.css';

interface JsonLineProps {
  nestedAddress?: string;
  bracketOpen?: boolean;
  bracketKey?: string;
  keyValue?: {
    key: string;
    value: string;
  };
  bracketClose?: boolean;
  nestedLevel?: number;
}

export const JsonLine: React.FC<JsonLineProps> = ({
  nestedAddress,
  bracketOpen,
  bracketKey,
  keyValue,
  bracketClose,
  nestedLevel,
}) => {
  const [hovering, setHovering] = React.useState(false);

  const onMouseEnter = () => {
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
  };

  const deleteKey = () => {
    const keyAddress = nestedAddress ? `${nestedAddress}.${keyValue?.key}` : keyValue?.key;

    console.log(`key to delete: ${keyAddress}`);
  };

  return (
    <div className="json-line-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <DragIcon size="15px" color={'#767676'} marginRight="15px" />
      {bracketOpen && (
        <div className="object-key-open-bracket" style={{ paddingLeft: nestedLevel ? nestedLevel * 20 : 0 }}>
          {bracketKey && <span className="object-key">{`${bracketKey}: `}</span>}
          <span className="bracket-open">{'{'}</span>
        </div>
      )}

      {keyValue && (
        <div className="key-value">
          <div className="key-value-text-container">
            <span className="json-key">{`${keyValue.key}: `}</span>
            <span className="json-value">{`${
              typeof keyValue.value === 'string' ? `"${keyValue.value}"` : keyValue.value
            },`}</span>
          </div>

          <div className="delete-icon-container" onClick={deleteKey}>
            {hovering && <DeleteIcon size="12px" color="#C24747" />}
          </div>
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
