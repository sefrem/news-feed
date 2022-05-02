import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

import { ModalContextProvider } from "./context/modalContext";
import { MessagesContextProvider } from "./context/messagesContext";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <ModalContextProvider>
      <MessagesContextProvider>
        <App />
      </MessagesContextProvider>
    </ModalContextProvider>
  </ErrorBoundary>
);
