import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";

import "modern-normalize";
import "./index.css";
import { pesistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={pesistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
