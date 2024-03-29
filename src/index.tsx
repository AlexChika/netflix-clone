import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Provider } from "react-redux";
import Store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
