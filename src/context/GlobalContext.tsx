import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { DirectoryContents } from '../types';

export interface GlobalState {
  directoryPath?: string;
  directoryContents?: DirectoryContents;
  selectedJsonFile?: string;
}

export enum GlobalStateActionTypes {
  SetDirectoryPath = 'SetDirectoryPath',
  SetDirectoryContents = 'SetDirectoryContents',
  SetSelectedJsonFilePath = 'SetSelectedJsonFilePath',
}

export interface SetDirectoryPath {
  type: GlobalStateActionTypes.SetDirectoryPath;
  payload: {
    directoryPath: string;
  };
}

export interface SetDirectoryContents {
  type: GlobalStateActionTypes.SetDirectoryContents;
  payload: {
    directoryContents: DirectoryContents;
  }
}

export interface SetSelectedJsonFilePath {
  type: GlobalStateActionTypes.SetSelectedJsonFilePath;
  payload: {
    selectedJsonFile: string;
  }
}

export type GlobalContextActions = SetDirectoryPath | SetDirectoryContents | SetSelectedJsonFilePath;

export const defaultGlobalState: GlobalState = {
  directoryPath: undefined,
  directoryContents: undefined,
  selectedJsonFile: undefined
};

export const GlobalContext = createContext<[GlobalState, Dispatch<GlobalContextActions>]>([
  defaultGlobalState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (): void => {},
]);

function globalStateReducer(state: GlobalState, action: GlobalContextActions): GlobalState {
  switch (action.type) {
    case GlobalStateActionTypes.SetDirectoryPath: {
      return {
        ...state,
        directoryPath: action.payload.directoryPath,
      };
    }

    case GlobalStateActionTypes.SetDirectoryContents: {
      return {
        ...state,
        directoryContents: action.payload.directoryContents,
      };
    }

    case GlobalStateActionTypes.SetSelectedJsonFilePath: {
      return {
        ...state,
        selectedJsonFile: action.payload.selectedJsonFile,
      };
    }

    default:
      return state;
  }
}

export const GlobalContextProvider: React.FC<{
  externalGlobalState?: GlobalState;
  children: React.ReactNode;
}> = ({ children, externalGlobalState }) => {
  const [state, dispatch] = useReducer(globalStateReducer, externalGlobalState ?? defaultGlobalState);

  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
};

export const useGlobalState = (): [GlobalState, Dispatch<GlobalContextActions>] => {
  return useContext(GlobalContext);
};
