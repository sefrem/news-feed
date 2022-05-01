import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ModalContextProvider } from "./context/modalContext";

import "./index.css";
import { MessagesContextProvider } from "./context/messagesContext";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <ModalContextProvider>
      <MessagesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MessagesContextProvider>
    </ModalContextProvider>
  </ErrorBoundary>
);
