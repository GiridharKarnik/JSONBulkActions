import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { DirectoryContents, JSONObject } from '../types';

export enum JsonOperationType {
  Delete = 'Delete',
  Move = 'Move',
}

export interface JsonDeleteKeyOperation {
  type: JsonOperationType.Delete;
  keyToDelete: string;
  keyPath: string;
}

export type JsonOperation = JsonDeleteKeyOperation;

export interface JsonOperationsState {
  operations: Array<JsonOperation>;
}

export enum JsonOperationsActionTypes {
  QeueJsonOperation = 'QeueJsonOperation',
}

export interface QeueJsonOperation {
  type: JsonOperationsActionTypes.QeueJsonOperation;
  payload: {
    operation: JsonOperation;
  };
}

export type JsonOperationsActions = QeueJsonOperation;

export const defaultJsonOperationsState: JsonOperationsState = {
  operations: [],
};

export const JsonOperationsContext = createContext<[JsonOperationsState, Dispatch<JsonOperationsActions>]>([
  defaultJsonOperationsState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (): void => {},
]);

function jsonOperationsStateReducer(state: JsonOperationsState, action: JsonOperationsActions): JsonOperationsState {
  switch (action.type) {
    case JsonOperationsActionTypes.QeueJsonOperation: {
      return {
        ...state,
        operations: [...state.operations, action.payload.operation],
      };
    }

    default:
      return state;
  }
}

export const JsonOperationsContextProvider: React.FC<{
  externalJsonOperationsState?: JsonOperationsState;
  children: React.ReactNode;
}> = ({ children, externalJsonOperationsState }) => {
  const [state, dispatch] = useReducer(jsonOperationsStateReducer, externalJsonOperationsState ?? defaultJsonOperationsState);

  return <JsonOperationsContext.Provider value={[state, dispatch]}>{children}</JsonOperationsContext.Provider>;
};

export const useJsonOperationsState = (): [JsonOperationsState, Dispatch<JsonOperationsActions>] => {
  return useContext(JsonOperationsContext);
};
