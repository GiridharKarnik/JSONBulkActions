import React from "react";
import ReactDOM from "react-dom";

import { Root } from "./components/Root";
import { GlobalContextProvider } from "./context/GlobalContext";

function render() {
  ReactDOM.render(
    <GlobalContextProvider>
      <Root />
    </GlobalContextProvider>,
    document.body
  );
}

render();
