import React, { createContext, Dispatch, useContext, useReducer } from "react";

export interface GlobalState {
  directoryPath?: string;
}

export enum GlobalStateActionTypes {
  SetDirectoryPath = "SetDirectoryPath",
}

export interface SetDirectoryPath {
  type: GlobalStateActionTypes.SetDirectoryPath;
  payload: {
    directoryPath: string;
  };
}

export type GlobalContextActions = SetDirectoryPath;

export const defaultGlobalState: GlobalState = {
  directoryPath: undefined,
};

export const GlobalContext = createContext<
  [GlobalState, Dispatch<GlobalContextActions>]
>([
  defaultGlobalState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (): void => {},
]);

function globalStateReducer(
  state: GlobalState,
  action: GlobalContextActions
): GlobalState {
  switch (action.type) {
    case GlobalStateActionTypes.SetDirectoryPath: {
      return {
        ...state,
        directoryPath: action.payload.directoryPath,
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
  const [state, dispatch] = useReducer(
    globalStateReducer,
    externalGlobalState ?? defaultGlobalState
  );

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = (): [GlobalState, Dispatch<GlobalContextActions>] => {
  return useContext(GlobalContext);
}
