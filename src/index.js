import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TickerProvider } from "lib/TickerContext";
import { TranslationProvider } from "lib/TranslationContext";
import { NetworkProvider } from "lib/NetworkContext";
import { determineBasename, languageFromUrl } from "lib/determineBasename";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <TranslationProvider initialLanguage={languageFromUrl()}>
    <TickerProvider>
      <NetworkProvider>
        <Router basename={determineBasename()}>
          <App />
        </Router>
      </NetworkProvider>
    </TickerProvider>
  </TranslationProvider>,
  document.getElementById("root")
);
